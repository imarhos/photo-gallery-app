import React, { Component } from 'react';

class PhotoGallery extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  async componentDidMount() {
    const apiKey = config.UNSPLASH_API_KEY;
    try {
      const res = await fetch(`https://api.unsplash.com/photos/random/?count=10&client_id=${apiKey}`);
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
    console.log(photos);
    return (
      <div>
        <h1>Starting a React App...</h1>
      </div>
    );
  }
}

export default PhotoGallery;
