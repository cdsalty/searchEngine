import React from 'react';
import SearchBar from './SearchBar';


// STEP ONE
// OUR VERY FIRST STEP IN THE PROCESS: we'll make a functional component to link to our 'index.js
        // defined const App=()=>{} and then did export default App; 
        // Then went to our first created folder, index.js
class App extends React.Component {
// Creating a callback method on the App and then refer to it in your Seachbar JSX near bottomn
	onSearchSubmit(term) {
		console.log(term);
	}
		

render(){        
	return ( 
		<div className = "ui container" style={{ marginTop: '10px' }}> 
			<SearchBar onSubmit={this.onSearchSubmit}  />       {/* This 'JSX' is what will appear on screen */}
		</div>  //this is what will show
			);
    }    
}

export default App;
