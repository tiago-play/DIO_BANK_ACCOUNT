/**
 * Tudo que estiver englobado pelo BrowserRouter vai receber
 * as configurações do react router dom
 * Criamos as configurações através do componente Routes
 * O Chakraprovider transmite a esitilização através do chakra-ui
 * React SPA single page application
 */

import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes'
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {

  !getAllLocalStorage() && createLocalStorage()
  
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes/>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
