import { Flex, useBreakpointValue, usePrevious } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar } from 'components/layout';
import FoodsPage from 'pages/FoodsPage';
import { PAGE_MAX_WIDTH } from 'utils/constants';

export const Body = ({ isSidebarOpen, openSidebar, closeSidebar }) => {
  const isMobile = useBreakpointValue(
    { base: true, xl: false },
    { ssr: false }
  );
  const prevIsMobile = usePrevious(isMobile);

  useEffect(() => {
    if (!isMobile) openSidebar();
    else closeSidebar();
  }, [closeSidebar, isMobile, openSidebar, prevIsMobile]);

  return (
    <Flex
      w="full"
      maxW={PAGE_MAX_WIDTH}
      h="calc(100vh - 104px)"
      maxH="calc(100vh - 104px)"
      m="0 auto"
      pos="relative"
    >
      {isSidebarOpen && (
        <Sidebar isMobile={isMobile} closeSidebar={closeSidebar} />
      )}
      <Flex flex={1} h="full" overflowY="auto" zIndex={isMobile ? 1 : 'unset'}>
        <Flex
          w="1072px"
          mx={{ base: '15px', sm: '15px', md: '32.5px' }}
          my="20px"
        >
          <Routes>
            <Route path="/foods" element={<FoodsPage />} />
            <Route path="*" element={<Navigate to="/foods" replace />} />
          </Routes>
        </Flex>
      </Flex>
    </Flex>
  );
};

Body.propTypes = {
  isSidebarOpen: PropTypes.bool,
  openSidebar: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

export default Body;
