import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { BsEnvelope } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { HiChevronDown } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';

export const MenuRight = flexProps => (
  <Flex
    display={{
      base: 'none',
      xl: 'flex',
    }}
    align="center"
    justify="space-between"
    {...flexProps}
  >
    <Flex
      gap={6}
      align="center"
      borderRight="1px solid"
      borderRightColor="gray.700"
      px="20px"
    >
      <Text
        color="white"
        textTransform="uppercase"
        fontSize="16px"
        fontWeight={700}
      >
        Make Recommendations
      </Text>
      <Flex
        h="26px"
        w="26px"
        bg="primary.500"
        borderRadius="4px"
        align="center"
        justify="center"
      >
        <Text color="white" fontSize="16px" fontWeight={700}>
          0
        </Text>
      </Flex>
    </Flex>
    <Flex align="center" px="20px" columnGap="20px">
      <Button variant="outline-white">Add Clients</Button>
      <Box w="32px" h="21.03px" pos="relative">
        <Flex
          h="20px"
          w="19px"
          bg="#F9615A"
          borderRadius="20px"
          align="center"
          justify="center"
          pos="absolute"
          top="-6px"
          right="-5px"
        >
          <Text color="white" fontSize="14px" fontWeight={700}>
            4
          </Text>
        </Flex>
        <Icon as={BsEnvelope} w="full" h="full" color="white" />
      </Box>
      <Icon as={MdOutlineShoppingBag} w="22px" h="26px" color="white" />
      <Menu>
        <MenuButton
          as={Button}
          variant="link"
          iconSpacing={0}
          rightIcon={
            <Icon as={HiChevronDown} color="#199BB5" w="24px" h="24px" />
          }
        >
          <Icon as={FiUser} color="white" w="23.74px" h="26px" />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  </Flex>
);
export default MenuRight;
