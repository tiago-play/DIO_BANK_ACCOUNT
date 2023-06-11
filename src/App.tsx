import { 
  ChakraProvider,
  Box
} from '@chakra-ui/react'

import { Card } from './components/Card'


function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Card />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
