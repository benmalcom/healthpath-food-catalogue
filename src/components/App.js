import { ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';
import { Header, Sidebar } from 'components/layout';
import theme from 'styles/theme';
import { PAGE_MAX_WIDTH } from 'utils/constants';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" maxW={PAGE_MAX_WIDTH} h="100vh" bg="#F5F5F5">
        <Header />
        <Flex w="full" flex={1}>
          <Sidebar />
          <Flex></Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
