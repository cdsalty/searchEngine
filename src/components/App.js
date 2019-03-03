import React from 'react';
import axios from 'axios';	// axios placed above because this is a user made component
import SearchBar from './SearchBar';	


class App extends React.Component {
    state = { images: [] }; // by assigning it as an array or object, we can call on it vs. if we defined it as NULL

    // Create callback method; refer to it in Render Method, in <Seachbar />
	onSearchSubmit = async (term) => {
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query : term }, // params: specifies the different query string, parameters, we want in request
			headers: {
				Authorization: 'Client-ID 05e23c603b63c6549e8bb4d1f64dad26360985c386f9a77b390f040a7ffbe3ac'
			}
        });
        
        this.setState({ images: response.data.results });
	}

    render(){        
        return ( 
            <div className = "ui container" style={{ marginTop: '10px' }}> 
                <SearchBar onSubmit={this.onSearchSubmit}  />   {/* THIS 'JSX' is what displays on screen */}
                Found: {this.state.images.length} images
            </div>  
            );
        }    
    }

export default App;
