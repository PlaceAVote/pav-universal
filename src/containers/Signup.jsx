import React from 'react';
import Modal from '../components/Modal.jsx';
import SignupForm from './forms/Signup.jsx';

/**
 * A Signup Modal for the signup page
 */
const Signup = () => {
  return (
    <div>
    <Modal>
      <SignupForm />
    </Modal>
    </div>
  );
};

export default Signup;
