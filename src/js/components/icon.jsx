import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ glyph, classes }) => {
  const classList = ['icon'];
  if (classes) classList.push(classes);
  return (
    <svg className={classList.join(' ')}>
      <use xlinkHref={`#${glyph}`} />
    </svg>
  );
};

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

Icon.defaultProps = {
  classes: '',
};

export default Icon;
