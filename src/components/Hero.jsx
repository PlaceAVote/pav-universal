import React, { PropTypes } from 'react';

const heroStyle = {
  width: '100%',
  minHeight: '550px',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  color: '#FFFFFF',
};

const Hero = ({ img, title, subtitle }) => {
  heroStyle.backgroundImage = `url(${img})`;
  return (
    <div style={ heroStyle }>
    <h1>{ title }</h1>
    <h2>{ subtitle }</h2>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
};

export default Hero;
