import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({ slideToRight, rightArrow }) => (
  <div className="next-arrow arrow" onClick={slideToRight} >
    <img src={rightArrow} alt="right-arrow" width="10px" />
  </div>
);

RightArrow.defaultProps = {
  slideToLeft: PropTypes.func,
  leftArrow: PropTypes.string,
};

export default RightArrow;
