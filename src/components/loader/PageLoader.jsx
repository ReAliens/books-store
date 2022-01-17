import { Grid, Spinner } from '@chakra-ui/react';

const FullPageLoader = () => (
  <Grid
    justifyContent="center"
    alignItems="center"
    alignContent="center"
    maxWidth="100%"
  >
    <Spinner color="accentDark" size="xl" />
  </Grid>
);

export default FullPageLoader;
