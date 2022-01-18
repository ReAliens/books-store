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

const BookCard = () => (
  <Grid
    gridTemplateColumns="repeat(4, 1fr)"
    gap={4}
    p={4}
    width="full"
    height="170px"
    bgColor="bgSec"
    borderColor="borderSec"
    borderWidth="1px"
  >
    <GridItem
      colSpan={2}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Text color="textMain" fontWeight="bold" opacity={0.5}>
        Action
      </Text>
      <Flex flexDir="column">
        <Text color="textMain" fontWeight="bold" fontSize="2xl">
          The Hunger Game
        </Text>
        <Text color="textSec">Suzzane Collins</Text>
      </Flex>
      <HStack spacing="20px" color="textSec" display="flex">
        <Stack direction="row" h="20px" alignItems="center">
          <Text>Comments</Text>
          <Divider orientation="vertical" />
        </Stack>
        <Stack direction="row" h="20px" alignItems="center">
          <Text>Remove</Text>
          <Divider orientation="vertical" />
        </Stack>
        <Stack direction="row" h="20px" alignItems="center">
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
    <GridItem display="flex" justifyContent="space-between" flexDir="column">
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

export default BookCard;
