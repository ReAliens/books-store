import { Box, Divider } from '@chakra-ui/react';
import BookCard from '../../components/BookCard/BookCard';
import BookForm from '../../components/BookForm/BookForm';

const Books = () => (
  <Box mt="20px" px="5rem">
    <BookCard />
    <Divider orientation="horizontal" width="100%" my="50px" />
    <BookForm />
  </Box>
);

export default Books;
