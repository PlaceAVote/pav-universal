// Define or import reducer functions to manage your redux application.
import { combineReducers } from 'redux';
import forms from './forms.js';
// Import reducer functions and add to the
// reducers object.
const reducers = {
  forms,
};
const rootReducers = combineReducers(reducers);
export default rootReducers;
