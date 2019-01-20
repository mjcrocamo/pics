import React from 'react';

class OtherSearchBar extends React.Component {

    onInputClick() {
        console.log('Input was clicked');
    }

    onInputChange(e) {
        console.log(e.target.value);
    }

    // passing callback functions to onChange, onClick, onSubmit like
    // onClick={this.onInputClick}
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={(e) => console.log(e.target.value)} onClick={this.onInputClick}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default OtherSearchBar;