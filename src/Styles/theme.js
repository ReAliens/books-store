import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    bgMain: '#fafafa',
    bgSec: '#ffffff',
    textMain: '#121212',
    textSec: '#4386bf',
    borderSec: '#e8e8e8',
    bgBlue: {
      100: '#0290ff',
      200: '#379cf6',
      300: '#307bbe',
    },
  },
  styles: {
    global: () => ({
      html: {
        height: '100%',
      },
      div: {
        position: 'relative',
      },
      body: {
        width: '100%',
        height: '100%',
        bg: 'bgMain',
        position: 'relative',
      },
    }),
  },
});

export default theme;
