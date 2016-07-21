import * as actionTypes from '../actions/constants.js';
import emailRegex from '../utils/email_regex.js';

/**
 * Initial state defining the forms accross the application.
 * It is representative for the 'form' object on the state tree.
 * each form object (e.g. signup) will have a formName. The meta on a
 * form object relates the information about the form. each other
 * object is representative of a input.
 */
const initialState = {
  // will probably move initial state definitions in the future
  signup: {
    meta: {
      name: 'signup',
    },
    emailAddress: {
      name: 'emailAddress',
      type: 'email',
      required: true,
      error: {},
    },
    firstName: {
      name: 'firstName',
      type: 'text',
      required: true,
      error: {},
    },
    lastName: {
      name: 'lastName',
      type: 'text',
      required: true,
      error: {},
    },
    password: {
      name: 'password',
      type: 'password',
      required: true,
      error: {},
    },
    confirmPassword: {
      name: 'confirmPassword',
      type: 'password',
      required: true,
      error: {},
    },
    dateOfBirth: {
      name: 'dateOfBirth',
      type: 'date',
      required: true,
      error: {},
    },
    gender: {
      name: 'gender',
      type: 'text',
      required: true,
      error: {},
    },
    zipCode: {
      name: 'zipCode',
      type: 'zip',
      required: true,
      error: {},
    }
  },
  login: {},
};

/**
 * Validates a standard text input.
 * Will return a undefined if object if valid
 * or an error message if invalid.
 */
const validateTextInput = (value) => {
  if (!value) {
    return 'Field required';
  }
};

/**
 * Validates a standard email input.
 * Will return a undefined if object if valid
 * or an error message if invalid.
 */
const validateEmailAddress = (value) => {
  if (!emailRegex.test(value)) {
    return 'Email Address is not valid';
  }
};

const validateInput = (input, action) => {
  switch (input.type) {
    case 'text': {
      return validateTextInput(action.value);
    }
    case 'email': {
      return validateEmailAddress(action.value);
    }
    default: {
      return;
    }
  }
};

const manageInputEntered = (form, action) => {
  if (!form) {
    return;
  }
  const input = form[action.fieldName];
  if (!input) {
    return;
  }
  const error = {};
  if (input.required) {
    error.message = validateInput(input, action);
  }
  return Object.assign({}, form, {
    [action.fieldName]: Object.assign({}, input, {
      value: action.value,
      error,
    }),
  });
};

const forms = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.inputEntered: {
      const form = manageInputEntered(state[action.formId], action);
      if (!form) {
        return state;
      }
      return Object.assign({}, state, {
        [action.formId]: form,
      });
    }
    default: {
      return state;
    }
  }
};

export default forms;
