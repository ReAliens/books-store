import { ADD_BOOK, REMOVE_BOOK } from '../constants';
import removeBook from './booksUtils';

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return {
        ...state,
        books: removeBook(state.books, action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
