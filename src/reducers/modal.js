import * as actionTypes from '../actions/constants.js';

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
