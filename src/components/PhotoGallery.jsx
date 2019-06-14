import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PhotoGallery extends Component {

  constructor() {
    super();
    this.state = {
      testing: 'Testing',
    };
  }

  render() {
    const { testing } = this.state;
    return (
      <div>
        <h1>{`Starting a React App... ${testing}`}</h1>
      </div>
    );
  }
}

export default PhotoGallery;
