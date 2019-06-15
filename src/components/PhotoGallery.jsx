import React, { Component } from 'react';
import Photo from './Photo';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';

class PhotoGallery extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.unsplash.com/photos/random/?count=10&client_id=${process.env.UNSPLASh_API_KEY}`);
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const json = await res.json();
      this.setState({ photos: json });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { photos } = this.state;
    console.log("Photos from api ", photos);
    return (
      <div className="photos">
        <div className="photos-wrapper">
          {photos.map((photo, i) => <Photo key={i} photo={photo} />)}
        </div>
        <RightArrow />
        <LeftArrow />
      </div>
    );
  }
}

export default PhotoGallery;
