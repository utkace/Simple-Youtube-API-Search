import React, { Component } from 'react';
//React, { Component } ==  const Component = React.Component [ES6 Syntax]

class SearchBar extends Component { //Class Base Component
    constructor(props) {
        super(props);

        this.state = {term: '' };
    }
    render() {
        return (
            <div className = "search-bar">
                <input
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }/*--with ES6 arrow function--*/

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
    /*render() {
        return <input onChange={this.onInputChange}/>;
    }

    onInputChange(event) {
      console.log(event.target.value);
    } --without ES6 arrow function--*/
}

/*const SearchBar = () => {
    return <input />;
}; Function Based Component*/
export default SearchBar;

/*---NOTES---*/
//1. functional components do not have states ONLY Class based components do
//2. State is a plain javascript object, each class has its own state
//3. function components can contain class based components
//4. A component is called a controlled component if in recieves its value from state
