// Define or import reducer functions to manage your redux application.
import { combineReducers } from 'redux';
import modal from './modal.js';
import forms from './forms.js';
// Import reducer functions and add to the
// reducers object.
const reducers = {
  modal,
  forms,
};
const rootReducers = combineReducers(reducers);
export default rootReducers;
