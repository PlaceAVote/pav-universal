import React, { PropTypes } from 'react';

const heroStyle = {
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  color: '#FFFFFF',
};

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
  children: PropTypes.elements,
};

export default Hero;
