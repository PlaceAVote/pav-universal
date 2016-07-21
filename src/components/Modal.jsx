import React, { PropTypes } from 'react';

/**
 * Returns a modal component with the correct type of modal
 * based upon the modal object passed in.
 */
const Modal = ({ children }) => {
  return (
    <div className='c-modal'>
    <div className='c-modal__content'>
      { children }
    </div>
    </div>);
};

Modal.propTypes = {
  children: PropTypes.elements,
};

export default Modal;
