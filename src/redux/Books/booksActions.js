import axios from 'axios';
import {
  FETCH_BOOKS_START,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  ADD_BOOK_START,
  ADD_BOOK_DONE,
  ADD_BOOK_ERROR,
  RMV_BOOK_START,
  RMV_BOOK_DONE,
  RMV_BOOK_ERROR,
} from '../constants';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appID = 'xhWQwM2k6HpUZ81vmiUM';

export const fetchBookDataStart = () => ({
  type: FETCH_BOOKS_START,
});

export const fetchBookDataSucc = (payload) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload,
});

export const fetchBookDataFailure = (payload) => ({
  type: FETCH_BOOKS_FAILURE,
  payload,
});

export const addBookStart = () => ({
  type: ADD_BOOK_START,
});

export const addBookDone = (payload) => ({
  type: ADD_BOOK_DONE,
  payload,
});

export const addBookErr = (payload) => ({
  type: ADD_BOOK_ERROR,
  payload,
});

export const rmvBookStart = () => ({
  type: RMV_BOOK_START,
});

export const rmvBookDone = (payload) => ({
  type: RMV_BOOK_DONE,
  payload,
});

export const rmvBookErr = (payload) => ({
  type: RMV_BOOK_ERROR,
  payload,
});

export const fetchBooksData = () => (dispatch) => {
  dispatch(fetchBookDataStart());
  return axios
    .get(`${baseUrl}/apps/${appID}/books`)
    .then((books) => {
      const res = books?.data;
      const list = res
        ? Object.keys(res).map((key) => {
          const book = res[key][0];
          return { ...book, item_id: key };
        })
        : null;
      dispatch(fetchBookDataSucc(list));
    })
    .catch((err) => dispatch(fetchBookDataFailure(err)));
};

export const addBook = (book) => (dispatch) => {
  dispatch(addBookStart());
  return axios
    .post(`${baseUrl}/apps/${appID}/books`, book)
    .then((book) => {
      dispatch(addBookDone(JSON.parse(book?.config?.data)));
    })
    .catch((err) => dispatch(addBookErr(err)));
};

export const rmvBook = (id) => (dispatch) => {
  dispatch(rmvBookStart());
  return axios
    .delete(`${baseUrl}/apps/${appID}/books/${id}`, { item_id: id })
    .then((id) => dispatch(rmvBookDone(id?.config?.item_id)))
    .catch((err) => dispatch(rmvBookErr(err)));
};
