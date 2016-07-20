import * as actionTypes from '../actions/constants.js';

/**
 * Modal Reducer.
 * Recognised Types:
 *  - showModal
 *  - hideModal
 * @return new state of modal property on state.
 */
const modal = (state = {}, action = {}) => {
  switch (action.type) {
    case actionTypes.showModal: {
      return {
        visible: true,
        modal: action.modal,
      };
    }
    case actionTypes.hideModal: {
      return {
        visible: false,
      };
    }
    default: return state;
  }
};

export default modal;
