import { Box, Divider, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import BookCard from '../../components/BookCard/BookCard';
import BookForm from '../../components/BookForm/BookForm';

const Books = () => {
  const books = useSelector((state) => state.booksReducer.books);
  return (
    <Box mt="20px" px="5rem">
      {books?.length ? (
        books?.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <Text>No books Added Yet </Text>
      )}
      <Divider orientation="horizontal" width="100%" my="50px" />
      <BookForm />
    </Box>
  );
};

export default Books;
