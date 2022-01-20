import {
  Box, Divider, Flex, Spinner, Text,
} from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from '../../components/BookCard/BookCard';
import BookForm from '../../components/BookForm/BookForm';
import { fetchBooksData } from '../../redux/Books/booksActions';

const Books = () => {
  const dispatch = useDispatch();
  const booksState = useSelector((state) => state);
  const books = booksState?.booksReducer?.books;
  useEffect(() => {
    dispatch(fetchBooksData());
  }, []);

  const data = useMemo(() => {
    if (booksState?.booksReducer?.isFetching) {
      return (
        <Flex justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="bgBlue.100"
            size="xl"
            mx="auto"
          />
        </Flex>
      );
    }
    if (books.length) {
      return books?.map((book) => <BookCard key={book?.item_id} book={book} />);
    }
    return <Text>No books Added Yet </Text>;
  });

  return (
    <Box mt="20px" px="5rem">
      {data}
      <Divider orientation="horizontal" width="100%" my="50px" />
      <BookForm />
    </Box>
  );
};

export default Books;
