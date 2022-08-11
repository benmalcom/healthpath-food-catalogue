import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
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

export const Header = () => {
  return (
    <Flex
      w="full"
      h="104px"
      bg="gray.900"
      px="242px"
      align="center"
      py="15px"
      justify="space-between"
    >
      <Flex align="center" justify="space-between">
        <Box>
          <Image src="images/logo-full.png" />
        </Box>
      </Flex>
      <Flex align="center" justify="space-between">
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
            bg="brand.primary"
            borderRadius="4px"
            align="center"
            justify="center"
          >
            <Text
              color="white"
              textTransform="uppercase"
              fontSize="16px"
              fontWeight={700}
            >
              0
            </Text>
          </Flex>
        </Flex>
        <Flex align="center" px="20px" columnGap="20px">
          <Button variant="outline-white">Add Clients</Button>
          <Icon as={BsEnvelope} w="32px" h="21.03px" color="white" />
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
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

Header.propTypes = {};

export default Header;
