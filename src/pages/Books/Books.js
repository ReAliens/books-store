import { Box, Divider, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from '../../components/BookCard/BookCard';
import BookForm from '../../components/BookForm/BookForm';
import { fetchBooksData } from '../../redux/Books/booksActions';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);
  useEffect(() => {
    dispatch(fetchBooksData());
  }, []);

  return (
    <Box mt="20px" px="5rem">
      {books?.length ? (
        books?.map(
          (book) => <BookCard key={book?.item_id} book={book} />,
        )
      ) : (
        <Text>No books Added Yet </Text>
      )}
      <Divider orientation="horizontal" width="100%" my="50px" />
      <BookForm />
    </Box>
  );
};

export default Books;
