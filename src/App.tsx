import './App.css';
import AuthWall from './components/auth/auth-wall';

import { ChakraProvider } from '@chakra-ui/react';
import GlobalLoading from './components/loading/global-loading';

const App = () => {
  return (
    <ChakraProvider>
      <GlobalLoading>
        <AuthWall />
      </GlobalLoading>
    </ChakraProvider>
  );
};

export default App;
