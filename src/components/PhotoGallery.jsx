import React, { Component } from 'react';
import Photo from './Photo';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';

class PhotoGallery extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      counter: 0,
      transformVal: 0,
    };
    this.slideToRight = this.slideToRight.bind(this);
    this.slideToLeft = this.slideToLeft.bind(this);
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

  slideToRight() {
    // return back to the first photo
    const { photos, counter } = this.state;
    if (counter === photos.length - 1) {
      return this.setState({
        counter: 0,
        transformVal: 0,
      });
    }
    this.setState(prevState => ({
      counter: prevState.counter + 1,
      transformVal: prevState.transformVal + -(this.slide()),
    }));
  }

  slideToLeft() {
    const { counter } = this.state;
    if (counter === 0) return;
    this.setState(prevState => ({
      counter: prevState.counter - 1,
      transformVal: prevState.transformVal + this.slide(),
    }));
  }

  slide() {
    return document.querySelector('.photo').clientWidth;
  }

  render() {
    const { photos, transformVal } = this.state;
    console.log('Photos from api ', photos);
    return (
      <div className="photos">
        <div
          className="photos-wrapper"
          style={{
            transform: `translateX(${transformVal}px)`,
            transition: 'transform ease-out 0.45s',
          }}>
          {photos.map((photo, i) => <Photo key={i} photo={photo} />)}
        </div>
        <RightArrow slideToRight={this.slideToRight} />
        <LeftArrow slideToLeft={this.slideToLeft} />
      </div>
    );
  }
}

export default PhotoGallery;
