const removeBook = (books, selectedBook) => {
  const remainBooks = books.filter((book) => book.item_id !== selectedBook);
  return remainBooks;
};

export default removeBook;
