import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import AppRoutes from './routes/routes';
import theme from './Styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <main>
          <AppRoutes />
        </main>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
