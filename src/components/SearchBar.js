import React from 'react';

// unsplash.com/developers (API)

class SearchBar extends React.Component {

    state = { term: ''};

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    /*
        Other way

        onFormSubmit (e) {
            e.preventDefault();

            console.log(this.state.term);
        };

        <form onSubmit={(e) => this.onFormSubmit(e)}
    */

    // passing callback functions to onChange, onClick, onSubmit like
    // onClick={this.onInputClick}

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}/>
                    </div>
                </form>
           </div>
        );
    }
}

export default SearchBar;
