/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './Books/booksReducer';

const middleWares = [thunk, logger];

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(...middleWares));

export default store;
