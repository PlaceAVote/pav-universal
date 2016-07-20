import * as actions from './constants.js';

export const showModal = (modal) => {
  return {
    type: actions.showModal,
    visible: true,
    modal,
  };
};

export const hideModal = () => {
  return {
    visible: false,
    type: actions.hideModal,
  };
};
