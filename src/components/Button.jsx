import React, { PropTypes } from 'react';

/**
 * Given a type return the class names to
 * construct the visual aspects of that button type.
 * Accepted Types:
 *  - blue
 *  - green
 */
const generateClassName = (type) => {
  const className = 'c-button';
  switch (type) {
    case 'blue': {
      return `${className} c-button--blue`;
    }
    case 'green': {
      return `${className} c-button--green`;
    }
    default: {
      return className;
    }
  }
};

/**
 * Visual Button Component
 */
const Button = ({ type, action, text }) => {
  const className = generateClassName(type);
  return (
    <button onClick={ action } className={ className }>{ text }</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
