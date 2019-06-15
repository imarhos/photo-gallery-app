import React from 'react';

const LeftArrow = ({ slideToLeft }) => (
  <div className="back-arrow arrow" onClick={slideToLeft} >
    <img src="../../public/chevron-left-solid.svg" alt="left-arrow" width="10px" />
  </div>
);

export default LeftArrow;
