import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({ slideToLeft, leftArrow }) => (
  <div className="back-arrow arrow" onClick={slideToLeft} >
    <img src={leftArrow} alt="left-arrow" width="10px" />
  </div>
);

LeftArrow.defaultProps = {
  slideToLeft: PropTypes.func,
  leftArrow: PropTypes.string,
};

export default LeftArrow;
