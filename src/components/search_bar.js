import React, { Component } from 'react'

//class component (state)
class SearchBar extends Component {
    // and call every time when render SearchBar
    constructor(props) {
        super(props);

        //init state
        this.state = { term: '' }
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;