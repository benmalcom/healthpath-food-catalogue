import { Flex, Icon, Text } from '@chakra-ui/react';
import { AiOutlineShopping } from 'react-icons/ai';

export const MobileBasket = flexProps => (
  <Flex
    display={{
      base: 'flex',
      xl: 'none',
    }}
    {...flexProps}
    pos="relative"
  >
    <Text
      fontWeight={700}
      color="primary.500"
      pos="absolute"
      left="calc(50% - 5px)"
      top="calc(50% - 8px)"
    >
      0
    </Text>
    <Icon
      as={AiOutlineShopping}
      w="32px"
      h="32px"
      color="white"
      cursor="pointer"
    />
  </Flex>
);
export default MobileBasket;
