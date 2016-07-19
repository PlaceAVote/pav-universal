// Define or import reducer functions to manage your redux application.
import { combineReducers } from 'redux';
// Import reducer functions and add to the
// reducers object.
const user = () => {
  return {};
};
const reducers = {
  user,
};
const rootReducers = combineReducers(reducers);
export default rootReducers;
