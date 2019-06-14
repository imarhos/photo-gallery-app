import React, { Component } from 'react';

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
      <div>
        <h1>Starting a React App...</h1>
      </div>
    );
  }
}

export default PhotoGallery;
