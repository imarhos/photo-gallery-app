import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({ slideToRight, rightArrow }) => (
  <div className="next-arrow arrow" onClick={slideToRight} >
    <img src={rightArrow} alt="right-arrow" width="10px" />
  </div>
);

RightArrow.defaultProps = {
  slideToRight: PropTypes.func,
  rightArrow: PropTypes.string,
};

export default RightArrow;
