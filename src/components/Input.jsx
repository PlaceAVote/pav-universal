import React, { PropTypes } from 'react';
import ReactTransition from 'react-addons-css-transition-group';

const Input = ({ label, placeholder, type, validate, error = {} }) => {
  return (<div>
     <label>{ label }</label>
     <input type={ type } placeholder={ placeholder } onBlur={ validate }/>
      <ReactTransition>
      <div>
        { error.message }
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

export default Input;
