import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description }) => (
  <div className="description-container">
    <p className="description">{description}</p>
  </div>
);

Description.propTypes = {
  description: PropTypes.string,
};

export default Description;
