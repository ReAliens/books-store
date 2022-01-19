/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
// import logger from 'redux-logger';
import booksReducer from './Books/booksReducer';

const reducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
