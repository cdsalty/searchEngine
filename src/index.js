import React from 'react';
import ReactDOM from 'react-dom';
//STEP 2: import App
        // NOTE: 
        // make sure to search in the current directory: './'
        // then look in the components folder, get the app.js file: 'components/app'
        // ./components/app
import App from './components/App';



// Show our screen pointing to our #root located in our index.html file
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);