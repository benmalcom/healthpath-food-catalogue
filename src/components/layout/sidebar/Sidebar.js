import { Flex, Link as ChakraLink, Text, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import links from 'components/layout/sidebar/links';

export const Sidebar = ({ isMobile }) => {
  return (
    <Flex
      zIndex={isMobile ? 2 : 'unset'}
      pos={isMobile ? 'absolute' : 'unset'}
      boxShadow={
        isMobile
          ? '0px 0px 1px rgba(32, 37, 43, 0.1), 0px 18px 18px rgba(32, 37, 43, 0.12)'
          : 'unset'
      }
      bg="white"
      h="full"
      justify="end"
      w={{
        base: 'fit-content',
        xl: '540px',
      }}
    >
      <VStack
        spacing={{
          base: '16px',
          lg: '34px',
        }}
        align="stretch"
        w={{
          base: '300px',
        }}
        p="20px"
      >
        {links.map((link, index) => (
          <ChakraLink
            key={index}
            as={RouterLink}
            to={link.path}
            textDecoration="none"
            _hover={{ color: 'primary.500' }}
            _active={{ color: 'primary.500' }}
            color="#50555B"
            fontSize="16px"
            fontWeight={700}
            _activeLink={{ color: 'primary.500' }}
          >
            <Flex align="center" color="inherit" font="inherit">
              {link.icon}{' '}
              <Text font="inherit" textTransform="uppercase" ml="10px">
                {link.label}
              </Text>
            </Flex>
          </ChakraLink>
        ))}
      </VStack>
    </Flex>
  );
};

Sidebar.propTypes = {
  isMobile: PropTypes.bool,
};
export default Sidebar;
