import * as actions from './constants.js';

/**
 * Show Modal Action Creator.
 * Always sets visible to true.
 */
export const showModal = (modal) => {
  return {
    type: actions.showModal,
    visible: true,
    modal,
  };
};

/**
 * Hide Modal Action Creator.
 * Always sets visible to false.
 */
export const hideModal = () => {
  return {
    visible: false,
    type: actions.hideModal,
  };
};
