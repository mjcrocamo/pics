import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });

        this.setState({images: response.data.results});
    }

    /*
        onSearchSubmit = async (term) => {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization:
                        'Client-ID 7bc563b9aadc5bfe37634dc99f743c12f5e69f7703b5a05982defc239efe5f83'
                }
            });

            this.setState({ images: response.data.results });
        */

        /*
            No async/ await
            //.then(), working with promise, it will let you know when request is complete
            .then((response) => {
                console.log(response.data.results);
            });
        */

    // In JSX before
    /* Found: {this.state.images.length} images */

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;