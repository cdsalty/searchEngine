import React from 'react';

class SearchBar extends React.Component {
    state = { term : '' };  // if I wanted to put text in there, it would be the new VALUE on line 24

	onFormSubmit = (event) => {  
		event.preventDefault(); 
			// console.log(this.state.term);
		this.props.onSubmit(this.state.term);
			// we look at our props object and we call the function that was passed into it as the onSubmit PROP
	};
	// vs. original method which was onFormSubmit(event) which would not correctly call on this.onFormSubmit


	render(){     
		return (
			<div className = "ui segment">
				<form onSubmit = { this.onFormSubmit } className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input 
								type="text" 
								value={this.state.term} // This value is come directly from "onChange" below
								onChange = {(e) => this.setState({ term: e.target.value })} />  
					</div>  
				</form>
			</div>
		);
	}
};

export default SearchBar;
                
