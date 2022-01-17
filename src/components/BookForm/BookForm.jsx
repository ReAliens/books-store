import {
  Box, Button, Flex, Heading, Input, Select,
} from '@chakra-ui/react';

const BookForm = () => {
  console.log('data');
  return (
    <Box width="full">
      <Heading color="textMain" opacity={0.5} my="20px">
        ADD NEW BOOK
      </Heading>
      <Flex>
        <Input width="50%" mr="20px" />
        <Flex width="40%">
          <Select placeholder="Select option" width="90%">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>
        <Button
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
    </Box>
  );
};
export default BookForm;
