import * as actions from './constants.js';

/**
 * Should be triggered when an input is entered.
 * @param {string} formId - relates to which form the input belongs too.
 * @param {string} inputType - is to determine what needs to be done to the value.
 *    e.g. if it is an email type, email validation will occurr.
 * @param {string} fieldName - refers to the name of the input, but will also be it's key
 *    in the state -> forms -> form object.
 * @param {string} value - is the value which has just been entered.
 */
export const inputEntered = ({ formId, fieldName, value }) => {
  return {
    type: actions.inputEntered,
    formId,
    fieldName,
    value,
  };
};
