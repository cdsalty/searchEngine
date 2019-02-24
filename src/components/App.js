import React from 'react';
import SearchBar from './SearchBar';


// OUR VERY FIRST STEP IN THE PROCESS: we'll make a functional component to link to our 'index.js
        // defined const App=()=>{} and then did export default App; 
        // Then wen to our first created folder, index.js
const App = () => {
    return <div className = "ui container" style={{ marginTop: '10px' }}> 
        <SearchBar />            {/* This 'JSX' is what will appear on screen */}
        </div>;  //this is what will show
};

export default App;
