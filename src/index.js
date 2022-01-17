import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import colors from './Styles/theme';

const theme = extendTheme({ colors });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
