import { ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';
import { Header } from 'components/layout';
import theme from 'styles/theme';
import { PAGE_MAX_WIDTH } from 'utils/constants';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" maxW={PAGE_MAX_WIDTH}>
        <Header />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
