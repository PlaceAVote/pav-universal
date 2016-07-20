import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * Maps the modal state from the global object
 * to the modal object the component deals with.
 */
export const mapPropsToState = (state = {}) => {
  return {
    modal: state.modal
  };
};

/**
 * Returns a modal component with the correct type of modal
 * based upon the modal object passed in.
 */
export const Modal = ({ modal }) => {
  if (!modal.visible) {
    return null;
  }
};

Modal.propTypes = {
  modal: PropTypes.object,
};

export default connect(mapPropsToState)(Modal);
