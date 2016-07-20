// Define or import reducer functions to manage your redux application.
import { combineReducers } from 'redux';
import modal from './modal.js';
// Import reducer functions and add to the
// reducers object.
const reducers = {
  modal,
};
const rootReducers = combineReducers(reducers);
export default rootReducers;
