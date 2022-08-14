import { ChakraProvider, Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Body, Header } from 'components/layout';

import theme from 'styles/theme';
import { PAGE_MAX_WIDTH } from 'utils/constants';

function App() {
  const { isOpen: isSidebarOpen, onToggle, onOpen, onClose } = useDisclosure();

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Flex
          direction="column"
          h="100vh"
          bg="#F5F5F5"
          w="full"
          maxW={PAGE_MAX_WIDTH}
        >
          <Header onClickMobileMenu={onToggle} isSidebarOpen={isSidebarOpen} />
          <Body
            isSidebarOpen={isSidebarOpen}
            openSidebar={onOpen}
            closeSidebar={onClose}
          />
        </Flex>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
