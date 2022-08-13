import { Flex, Link as ChakraLink, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import links from 'components/layout/sidebar/links';

export const Sidebar = ({}) => {
  return (
    <Flex w="540px" bg="white" h="full" justify="end">
      <VStack spacing="34px" align="stretch" w="300px" p="20px">
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

Sidebar.propTypes = {};
export default Sidebar;
