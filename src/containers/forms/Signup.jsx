import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import InputComponent from '../../components/Input.jsx';
import { inputEntered } from '../../actions/input.js';

export const mapPropsToState = (state = {}) => {
  return {
    signup: state.forms.signup,
  };
};


export const SignUp = ({ signup, dispatch }) => {
  return (
    <InputComponent type='email' label='Email Address' placeholder='someone@someong.com' validate={
      (value) => {
        dispatch(inputEntered({ formId: signup.meta.name, fieldName: signup.emailAddress.name, value }));
      }} error={ signup.emailAddress.error } />
  );
};

SignUp.propTypes = {
  signup: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(mapPropsToState)(SignUp);
