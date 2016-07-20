import React, { PropTypes } from 'react';

const heroStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  color: '#FFFFFF',
};

const Hero = ({ img, title, subtitle }) => {
  heroStyle.backgroundImage = `url(${img})`;
  return (
    <div style={ heroStyle } className='c-hero'>
    <h1>{ title }</h1>
    <h4>{ subtitle }</h4>
    <button className='c-button c-button--green'>Register Now</button>
    <button className='c-button c-button--blue'>Sign In</button>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
};

export default Hero;
