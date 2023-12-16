import './App.css';
import AuthWall from './components/auth/auth-wall';

import { ChakraProvider } from '@chakra-ui/react';
import GlobalLoading from './components/loading/global-loading';
import GlobalToast from './components/toast/global-toast';

const App = () => (
  <ChakraProvider>
    <GlobalLoading>
      <GlobalToast>
        <AuthWall />
      </GlobalToast>
    </GlobalLoading>
  </ChakraProvider>
);

export default App;
