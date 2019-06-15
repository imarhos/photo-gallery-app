import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description';

const Photo = ({ photo }) => {
  const { urls, description, altDescription } = photo;
  const styles = {
    backgroundImage: `url(${urls.regular})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };
  return (
    <div className="photo" style={styles}>
      <Description description={description ? description : altDescription || 'No Description'} />
    </div>
  );
};

Photo.propTypes = {
  photo: PropTypes.object,
};

export default Photo;
