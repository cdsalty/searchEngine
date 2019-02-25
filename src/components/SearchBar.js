import React from 'react';

//  *******     We will need a class based component BECAUSE:       *******
        // WE HAVE TO USE 'STATE' at some point to handle what the user's input into the searchbar.

class SearchBar extends React.Component{
    state = { term: '' };
    

    //    **** GET USED TO WRITTING: preventDefault() ****
    onFormSubmit(event){
        event.preventDefault();     //will prevent the form from submitting itself and refreshing the page
    }
    // onInputChange(event){
        //console.log(event.target.value);    //TO KNOW when locating input value.
    //}
    // onInputClick(){
    //     console.log("Looks like our input was just clicked. See me in the conosle????")
    // }



        // **NOTE** our value, 'this.state.term' is determined based on the target value and we force it into the input as value being displayed.
    render(){
        console.log(this.state.term);   // will show each input typed into our form in the console.
        return (
            <div className = "ui segment">
                <form onSubmit = { this.onFormSubmit } className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        type="text" 
                        value={this.state.term} 
                        onChange = {(e) => this.setState({ term: e.target.value })} />
                        {/* onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })} /> */}
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        {/* <input type = "text" onChange = { (e) => console.log(e.target.value)} /> */}
                    </div>
                
                </form>
            </div>
        );
    }
}

export default SearchBar;

// now we want to show this search bar in our App.js component. (Import SearchBar into App.js)