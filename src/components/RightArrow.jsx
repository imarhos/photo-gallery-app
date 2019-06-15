import React from 'react';

const RightArrow = ({ slideToRight }) => (
  <div className="next-arrow arrow" onClick={slideToRight} >
    <img src="../../public/chevron-right-solid.svg" alt="right-arrow" width="10px" />
  </div>
);

export default RightArrow;
