import { ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header, Sidebar } from 'components/layout';
import FoodsPage from 'pages/FoodsPage';
import theme from 'styles/theme';
import { PAGE_MAX_WIDTH } from 'utils/constants';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Flex
          direction="column"
          w="full"
          maxW={PAGE_MAX_WIDTH}
          m="0 auto"
          h="100vh"
          bg="#F5F5F5"
        >
          <Header />
          <Flex w="full" h="calc(100vh - 104px)" maxH="calc(100vh - 104px)">
            <Sidebar />
            <Flex flex={1} h="full" overflowY="auto">
              <Flex w="1072px" my="20px" mx="32.5px">
                <Routes>
                  <Route path="/foods" element={<FoodsPage />} />
                  <Route path="*" element={<Navigate to="/foods" replace />} />
                </Routes>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
