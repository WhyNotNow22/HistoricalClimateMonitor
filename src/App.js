import './App.css';
import React from 'react';
import Monitor from './components/Monitor'
import {  useState } from 'react';

function App() {
  const [monitors,setMonitors] = useState([Date.now()]);

  const deleteMonitor = (id) => {
    setMonitors(monitors.filter((monitorId) => monitorId !== id))
  }

  return (
    <div className='App'>
      <button onClick={() => setMonitors([...monitors,  Date.now()])}>Add new monitor</button>
      <div className="MonitorContaienr">
        {monitors.map((id) => {
          return <Monitor key={id} onRemove={() => deleteMonitor(id)}/>;
        })}
      </div>
    </div>
  );
}

export default App;
