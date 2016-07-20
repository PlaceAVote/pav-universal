import React, { PropTypes } from 'react';

/**
 * Inline styles included to help
 * with above the fold rendering.
 */
const heroStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  color: '#FFFFFF',
};

/**
 * A Visual Hero Component.
 */
const Hero = ({ img, title, subtitle, children }) => {
  heroStyle.backgroundImage = `url(${img})`;
  return (
    <div style={ heroStyle } className='c-hero'>
    <h1>{ title }</h1>
    <h4>{ subtitle }</h4>
      { children }
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.element,
};

export default Hero;
