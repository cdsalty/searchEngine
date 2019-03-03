import React from 'react';
import axios from 'axios';	// axios placed above because this is a user made component
import SearchBar from './SearchBar';	


// STEP ONE
// OUR VERY FIRST STEP IN THE PROCESS: we'll make a functional component to link to our 'index.js
        // defined const App=()=>{} and then did export default App; 
        // Then went to our first created folder, index.js
class App extends React.Component {
// Creating a callback method on the App and then refer to it in your Seachbar JSX near bottomn
	async onSearchSubmit(term) {
		// console.log(term);
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			// params: specifies the different query string parameters we want to add to this request
			// see https://unsplash.com/documentation#search-photos for full list of all params available
			params: { query : term },	// calling query from documentation above and passing (terms)  
			headers: {
				Authorization: 'Client-ID 05e23c603b63c6549e8bb4d1f64dad26360985c386f9a77b390f040a7ffbe3ac'
			}
		});

		console.log(response.data.results);
	}
// To return our data from the api, we also could have used a Promise, then dealt with .then()

render(){        
	return ( 
		<div className = "ui container" style={{ marginTop: '10px' }}> 
			<SearchBar onSubmit={this.onSearchSubmit}  />       {/* This 'JSX' is what will appear on screen */}
		</div>  //this is what will show
			);
    }    
}

export default App;
