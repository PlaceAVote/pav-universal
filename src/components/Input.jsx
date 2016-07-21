import React, { PropTypes } from 'react';
import ReactTransition from 'react-addons-css-transition-group';

/**
 * The Visual Layout for Input fields.
 * A Validation function can be passed in to trigger on the onBlur event.
 */
const Input = ({ label, placeholder, type, validate, error }) => {
  let input;
  return (<div className='c-input'>
     <label>{ label }</label>
     <input type={ type } placeholder={ placeholder } onBlur={ () => { validate(input.value); }} ref={n => { input = n; }}/>
      <ReactTransition>
      <div className='c-input__error'>
        <img src="images/error/error_sign.svg" /> { error.message }
      </div>
      </ReactTransition>
    </div>);
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.object,
  validate: PropTypes.func,
};

Input.defaultProps = {
  validate: () => {},
  error: {},
};

export default Input;
