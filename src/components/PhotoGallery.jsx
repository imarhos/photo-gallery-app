import React, { Component } from 'react';
import Photo from './Photo';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import { unsplash } from '../data/unsplash';
import leftArrow from '../../public/images/chevron-left-solid.svg';
import rightArrow from '../../public/images/chevron-right-solid.svg';
import spinner from '../../public/images/Spinner-1s-200px.svg';

class PhotoGallery extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      counter: 0,
      transformVal: 0,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.unsplash.com/photos/random/?count=10&client_id=${unsplash}`);
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const json = await res.json();
      this.setState({ photos: json, loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  slideToRight = () => {
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

  slideToLeft = () => {
    const { counter } = this.state;
    if (counter === 0) return;
    this.setState(prevState => ({
      counter: prevState.counter - 1,
      transformVal: prevState.transformVal + this.slide(),
    }));
  }

  slide = () => {
    return document.querySelector('.photo').clientWidth;
  }

  render() {
    const { photos, transformVal, loading } = this.state;
    if (loading) {
      return <img src={spinner} alt="spinner" className="spinner" />;
    }
    return (
      <div className="photos">
        <div
          className="photos-wrapper"
          style={{
            transform: `translateX(${transformVal}px)`,
            transition: 'transform ease-out 0.45s',
          }}>
          {photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
        </div>
        <RightArrow slideToRight={this.slideToRight} rightArrow={rightArrow} />
        <LeftArrow slideToLeft={this.slideToLeft} leftArrow={leftArrow} />
      </div>
    );
  }
}

export default PhotoGallery;
