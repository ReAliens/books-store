const removeBook = (books, selectedBook) => {
  const remainBooks = books.filter((book) => book.id !== selectedBook);
  return remainBooks;
};

export default removeBook;
