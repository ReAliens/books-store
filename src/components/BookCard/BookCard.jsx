import {
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  Stack,
  Flex,
  CircularProgress,
  Box,
  Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rmvBook } from '../../redux/Books/booksActions';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const { title, category } = book;
  const handleRemove = (id) => {
    dispatch(rmvBook(id));
  };
  return (
    <Grid
      gridTemplateColumns="repeat(4, 1fr)"
      gap={4}
      p={4}
      width="full"
      height="170px"
      bgColor="bgSec"
      borderColor="borderSec"
      borderWidth="1px"
      mt={5}
      borderRadius="20px"
    >
      <GridItem
        colSpan={2}
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text color="textMain" fontWeight="bold" opacity={0.5}>
          {category}
        </Text>
        <Flex flexDir="column">
          <Text color="textMain" fontWeight="bold" fontSize="2xl">
            {title}
          </Text>
          <Text color="textSec">Author</Text>
        </Flex>
        <HStack spacing="20px" color="textSec" display="flex">
          <Stack
            direction="row"
            h="20px"
            alignItems="center"
            _hover={{ color: 'blue', cursor: 'pointer' }}
          >
            <Text>Comments</Text>
          </Stack>
          <Stack
            direction="row"
            h="20px"
            alignItems="center"
            onClick={() => handleRemove(book.item_id)}
            _hover={{ color: 'blue', cursor: 'pointer' }}
          >
            <Divider orientation="vertical" />
            <Text>Remove</Text>
          </Stack>
          <Stack
            direction="row"
            h="20px"
            alignItems="center"
            _hover={{ color: 'blue', cursor: 'pointer' }}
          >
            <Divider orientation="vertical" />
            <Text>Edit</Text>
          </Stack>
        </HStack>
      </GridItem>
      <GridItem
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        px={8}
      >
        <CircularProgress value={68} size="120px" color="bgBlue.200" />
        <Box>
          <Text fontSize="4xl" fontWeight="bold" textAlign="center">
            68 %
          </Text>
          <Text fontSize="2xl" fontWeight="bold" opacity={0.5}>
            Completed
          </Text>
        </Box>
        <Divider orientation="vertical" />
      </GridItem>
      <GridItem
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDir="column"
      >
        <Box mt="10px">
          <Text fontSize="lg" color="textMain" opacity={0.5}>
            Current Chapter
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="textMain">
            Chapter 17
          </Text>
        </Box>
        <Button
          bgColor="bgBlue.200"
          color="bgSec"
          width="50%"
          _hover={{
            bgColor: 'bgSec',
            color: 'bgBlue.200',
            borderWidth: '1px',
            borderColor: 'bgBlue.200',
          }}
        >
          Update Progress
        </Button>
      </GridItem>
    </Grid>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
