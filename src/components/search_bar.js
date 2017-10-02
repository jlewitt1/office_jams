import React, { Component } from 'react';

//class based component-->needs a render method and return some JSX
class SearchBar extends Component { 
    constructor(props) { 
        super(props); //initial state in a class based component
        
        this.state = { //entire component will re-render when state changes
            term: '',
        };
    }
    render() { 
        return (  
        <div className = "search-bar">    
            <input
            value = {this.state.term} //value (of input) only changes when state changes-->value of input at any given time
            onChange={event => this.onInputChange(event.target.value)} /> 
        </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

//functional component
/*
const SearchBar = () => { 
    return <input />;
};
*/

