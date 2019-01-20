import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component {

    viewImageList = () => {

        const images =
            this.props.images.map((image) => {
                return <ImageCard key={image.id} image={image}/>
           });

        return images;
    }

    render() {
        console.log(this.props.images);
        return (
            <div className="image-list">{this.viewImageList()}</div>
        );
    }
}

export default ImageList;

/*

    class ImageList extends React.Component {


    viewImageList = () => {
        const images =
            this.props.images.map(( {description, id, urls} ) => {
                return <img key={id} src={urls.regular} alt={description}/>
           });

        return images;
    }

    render() {
        console.log(this.props.images);
        return (
            <div className="image-list">{this.viewImageList()}</div>
        );
    }
}

export default ImageList;

*/

/*
    Functional Component

    const ImageList = props => {

        const images = props.images.map((image) => {
            return <img src={image.urls.regular} />
        });

        return <div>{images}</div>
    }
 */