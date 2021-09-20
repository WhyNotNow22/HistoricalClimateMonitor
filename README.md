# Ingram Micro IoT Frontend Coding Test

## Summary
Allow a user to see a chart displaying basic historical climate data for a month at a time for at least 1 observation datum (e.g. precipitation )

Requirements
- Display a months worth of data for a single observation/property using the Daily Summaries historical dataset of the NOAA API.
- Allow the user to change the month and year ( hence triggering a new request to the NOAA API ) using form elements

## What we are looking for:

- Well designed component architecture
- Performant async/ajax along with some error handling
- A minimum of CSS styling ( don’t leave it completely ugly )

We also encourage you to pick a couple of optional improvements. The following are just some ideas, so if none of these interest you, feel free to do something that isn’t on this list:

- Caching previous results
- Any animations for chart transitions
- Chart more than 1 observation and allow user to switch between them
- Some unit/component testing ( Jest, react-testing-library, etc. )

## Project Structure
We've included all of the boilerplate to get started with this project using create-react-app, feel free to use this structure if you'd like. Though we prefer the use of React if you rather prefer to use something other than React or a different project structure, go ahead and make any changes you'd like. If not using React you will have to find Angular or Vue visualization libraries analogous to the React libraries linked below.

## Submission
Zip or tar up project without the node_modules folder and send to your recruitment contact. 

## Leverage NOAA API

[NOAA Web Services API](https://www.ncdc.noaa.gov/cdo-web/webservices/v2#gettingStarted)
### Daily Summaries

[Datasets | Climate Data Online (CDO)](https://www.ncdc.noaa.gov/cdo-web/datasets)

### Sample Data

[GHCND_sample_pdf](https://www1.ncdc.noaa.gov/pub/data/cdo/samples/GHCND_sample_pdf.pdf)

 
### If using React leverage one of these React Chart Libraries

- [FormidableLabs/victory](https://github.com/FormidableLabs/victory): A collection of composable React components for building interactive data visualizations (github.com)
- [airbnb/visx](https://github.com/airbnb/visx): 🐯 visx | visualization components (github.com)
- [plouc/nivo](https://github.com/plouc/nivo): nivo provides a rich set of dataviz components, built on top of the awesome d3 and Reactjs libraries (github.com)






## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

