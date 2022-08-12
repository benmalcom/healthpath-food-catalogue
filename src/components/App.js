import { ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header, Sidebar } from 'components/layout';
import Foods from 'pages/Foods';
import theme from 'styles/theme';
import { PAGE_MAX_WIDTH } from 'utils/constants';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Flex direction="column" maxW={PAGE_MAX_WIDTH} h="100vh" bg="#F5F5F5">
          <Header />
          <Flex w="full" flex={1}>
            <Sidebar />
            <Flex flex={1} pr="274px">
              <Routes>
                <Route path="/foods" element={<Foods />} />
                <Route path="*" element={<Navigate to="/foods" replace />} />
              </Routes>
            </Flex>
          </Flex>
        </Flex>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
