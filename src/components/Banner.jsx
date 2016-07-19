import React, { PropTypes } from 'react';

const bannerStyle = {
  width: '100%',
  minHeight: '550px',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  color: '#FFFFFF',
};

const Banner = ({ img, title, subtitle }) => {
  bannerStyle.backgroundImage = `url(${img})`;
  return (
    <div style={ bannerStyle }>
    <h1>{ title }</h1>
    <h2>{ subtitle }</h2>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
};

export default Banner;
