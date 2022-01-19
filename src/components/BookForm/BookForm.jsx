import {
  Box, Button, Flex, Heading, Input, Select,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/Books/booksActions';

const BookForm = () => {
  const methods = useForm({
    shouldUnregister: false,
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = methods;
  const dispatch = useDispatch();
  const submit = (data) => {
    const id = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const book = { ...data, id };
    dispatch(addBook(book));
    reset();
  };

  return (
    <Box width="full">
      <Heading color="textMain" opacity={0.5} my="20px">
        ADD NEW BOOK
      </Heading>
      <form onSubmit={handleSubmit(submit)}>
        <Flex>
          <Input
            width="50%"
            mr="20px"
            name="bookName"
            id="bookName"
            borderColor={errors.title ? 'red.500' : ''}
            outline={errors.title ? 'red.500' : ''}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('title', { required: true })}
          />
          <Select
            width="40%"
            mx="10px"
            placeholder="Select Category"
            borderColor={errors.category ? 'red.500' : ''}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('categorey', {
              required: true,
              onChange: (e) => e.target.value,
            })}
          >
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction">Science Fiction</option>
          </Select>
          <Button
            type="submit"
            bgColor="bgBlue.200"
            color="bgSec"
            width="10%"
            _hover={{
              bgColor: 'bgSec',
              color: 'bgBlue.200',
              borderWidth: '1px',
              borderColor: 'bgBlue.200',
            }}
          >
            ADD Book
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
export default BookForm;
