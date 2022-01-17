import {
  Box, Button, Flex, Heading, Input, Select,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const BookForm = () => {
  const methods = useForm({
    shouldUnregister: false,
  });
  const { register, handleSubmit } = methods;
  return (
    <Box width="full">
      <Heading color="textMain" opacity={0.5} my="20px">
        ADD NEW BOOK
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input width="50%" mr="20px" ref={register({ required: true })} />
          <Flex width="40%">
            <Select placeholder="Select option" width="90%">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
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
