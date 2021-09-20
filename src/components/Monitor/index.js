import { useEffect, useState } from 'react';
import { DATA_TYPES } from '../../const';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import './style.css';

const Monitor = ({ onRemove }) => {
    const [selectedValue, setSelectedValue] = useState(DATA_TYPES[0]);
    const [startDate, setStartDate] = useState('2018-06-22');
    const [endDate, setEndDate] = useState('2018-07-22');
    const [data, setData] = useState([]);
    const [info, setInfo] = useState({ value: '', date: '' });
    const [isLoading, setIsloading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setData([]);
        setIsloading(true);
        fetch(
            `https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00327027&units=metric&limit=365&datatypeid=${selectedValue}&startdate=${startDate}&enddate=${endDate}`,
            {
                headers: {
                    token: 'iBeedtaqTiOgoAOlmuAzayGiYGPfFHAs',
                },
            }
        )
            .then((response) => {
                if (response.status === 400) setErrorMessage('The date range must be less than 1 year.');
                return response.json();
            })
            .then(({ results }) => {
                if (!results?.length) setErrorMessage('No information');
                setData(results?.map(({ date, value }) => {
                    return {
                        date,
                        value,
                    };
                }))
            }).finally(() => setIsloading(false))
    }, [selectedValue, startDate, endDate]);

    return (
        <div className='Monitor'>
            <div className='Setup'>
                <input
                    title="Start time"
                    type='date'
                    value={startDate}
                    max='2021-09-01'
                    onChange={(event) => setStartDate(event.target.value)}
                />
                <select
                    title="Data type"
                    name='select'
                    value={selectedValue}
                    onChange={(event) => setSelectedValue(event.target.value)}
                >
                    {DATA_TYPES.map((elem, index) => {
                        return (
                            <option key={index} value={elem}>
                                {elem}
                            </option>
                        );
                    })}
                </select>
                <input
                    title="End time"
                    type='date'
                    value={endDate}
                    max='2021-09-01'
                    onChange={(event) => setEndDate(event.target.value)}
                />
            </div>
            <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                <VictoryAxis
                    style={{ tickLabels: { fill: "none" } }}
                    fixLabelOverlap={true}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => {
                        switch (selectedValue) {
                            case 'TMIN':
                            case 'TMAX':
                                return `${x}°C`;
                            case 'PRCP':
                                return `${x} mm`;
                            default:
                                return x;
                        }
                    }}
                />
                <VictoryBar
                    data={data?.length ? data : []}
                    x='date'
                    y='value'
                    events={[{
                        target: 'data',
                        eventHandlers: {
                            onMouseEnter: (event, value) => {
                                const { datum } = value;
                                event.target.style.fill = 'red';
                                setInfo({ value: datum.value, date: datum.date })
                            },
                            onMouseLeave: (event) => {
                                event.target.style.fill = 'rgb(69, 90, 100)';
                            }
                        }
                    }]}
                />
            </VictoryChart>
            <div>{`Value: ${info.value} Date: ${info.date.split('T')[0]}`}</div>
            <div className="HelpTip" style={{ display: data?.length && !isLoading ? 'none' : 'block' }}>{isLoading ? 'Loading...' : errorMessage}</div>
            <button className="RemoveButton" onClick={onRemove}>Close</button>
        </div>
    );
}

export default Monitor;
