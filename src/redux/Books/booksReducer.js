import {
  ADD_BOOK_DONE,
  ADD_BOOK_ERROR,
  ADD_BOOK_START,
  RMV_BOOK_DONE,
  RMV_BOOK_ERROR,
  RMV_BOOK_START,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_START,
  FETCH_BOOKS_SUCCESS,
} from '../constants';
import removeBooks from './booksUtils';

const initialState = {
  isFetching: false,
  error: undefined,
  books: [],
};

// const addItems = (items, addedItem) => {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        books: action.payload,
      };
    case ADD_BOOK_START:
      return {
        ...state,
        isFetching: true,
      };
    case ADD_BOOK_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ADD_BOOK_DONE:
      return {
        ...state,
        isFetching: false,
        books: [...state.books, action.payload],
      };
    case RMV_BOOK_START:
      return {
        ...state,
        isFetching: true,
      };
    case RMV_BOOK_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case RMV_BOOK_DONE:
      return {
        ...state,
        isFetching: false,
        books: removeBooks(state.books, action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
