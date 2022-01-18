import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AddPersonIcon } from '../../Styles/icons';

const Header = () => (
  <Flex
    pos="sticky"
    top="0"
    width="full"
    height="6rem"
    justifyContent="space-between"
    alignItems="center"
    bgColor="bgSec"
    px="5rem"
  >
    <Flex width="40%" alignItems="center" justifyContent="space-between">
      <Link to="/">
        <Text fontSize="5xl" color="bgBlue.100" fontWeight="bold">
          Bookstore CMS
        </Text>
      </Link>
      <Link to="/">
        <Text fontSize="14px">Books </Text>
      </Link>
      <Link to="/categories">
        <Text fontSize="14px">Categories </Text>
      </Link>
    </Flex>
    <Flex
      width="50px"
      height="50px"
      borderRadius="50%"
      borderColor="borderSec"
      borderWidth="1px"
      justifyContent="center"
      alignItems="center"
    >
      <AddPersonIcon height="50px" width="50px" />
    </Flex>
  </Flex>
);

export default Header;
