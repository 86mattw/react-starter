import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ glyph, classes }) => (
  <svg className={`icon ${classes}`}>
    <use xlinkHref={`#${glyph}`} />
  </svg>
);

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

Icon.defaultProps = {
  classes: '',
};

export default Icon;
