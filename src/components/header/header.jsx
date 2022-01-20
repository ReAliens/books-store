import { Flex, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { AddPersonIcon } from '../../Styles/icons';

const Header = () => {
  const location = useLocation();
  return (
    <Flex
      pos="sticky"
      top="0"
      zIndex="3"
      width="full"
      height="6rem"
      justifyContent="space-between"
      alignItems="center"
      bgColor="bgSec"
      px="5rem"
    >
      <Flex width="40%" alignItems="center" justifyContent="space-around">
        <Link to="/">
          <Text fontSize="4xl" color="bgBlue.100" fontWeight="bold">
            Bookstore CMS
          </Text>
        </Link>
        <Flex w="30%" justifyContent="space-around" alignItems="center">
          <Link to="/">
            <Text fontSize={location.pathname === '/' ? '18px' : '14px'}>
              Books
            </Text>
          </Link>
          <Link to="/categories">
            <Text
              fontSize={location.pathname === '/categories' ? '18px' : '14px'}
            >
              Categories
            </Text>
          </Link>
        </Flex>
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
};

export default Header;
