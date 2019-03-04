import React from 'react';
import unsplash from '../api/unsplash'; //this replaced the import axios from 'axios; request
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: [] }; // by assigning it as an array or object, we can call on it vs. if we defined it as NULL

    // Create callback method; refer to it in Render Method, in <Seachbar />
	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: { query : term }, // params: specifies the different query string, parameters, we want in request
        });
        
        this.setState({ images: response.data.results });
	}

    render(){        
        return ( 
            <div className = "ui container" style={{ marginTop: '10px' }}> 
                <SearchBar onSubmit={this.onSearchSubmit}  />   {/* THIS 'JSX' is what displays on screen */}
                <ImageList images = {this.state.images} />
            </div>  
            );
        }    
    }

export default App;


/* 
    NOTES:
    Inside our return under, SearchBar, I had:
    {/* Found: {this.state.images.length} images;------> this replaced with <ImageList /> }
    // <ImageList images = {this.state.images} />
    {/* *** In ImageList, we ASSIGN a PROP called images, and we pass everything in our state object; 
    SO REMEMBER, this PROP you created called "images" then, assign <ImageList images = {this.state.images} />
    NOW: Go inside ImageList.js and define ' const ImageList = (props) => {}
    }

*/
