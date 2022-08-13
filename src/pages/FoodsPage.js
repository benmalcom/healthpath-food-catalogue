import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import FoodsTab from 'components/page-components/foods/FoodsTab';

export const FoodsPage = () => {
  return (
    <Flex w="full" h="full" direction="column">
      <Flex w="full" justify="space-between" mb="25px" align="center">
        <Flex direction="column">
          <Text
            fontSize="40px"
            fontWeight={500}
            color="gray.800"
            lineHeight="48px"
          >
            Foods
          </Text>
          <Text
            fontSize="18px"
            fontWeight={400}
            color="gray.700"
            lineHeight="28px"
          >
            Here you can recommend foods
          </Text>
        </Flex>
        <Button
          colorScheme="primary"
          variant="link"
          textTransform="uppercase"
          leftIcon={<Icon as={AiOutlinePlusCircle} />}
          textDecoration="none"
          fontWeight={700}
          fontSize="16px"
          textUnderlineOffset={0}
          _hover={{ textDecoration: 'none' }}
        >
          Create meal plan
        </Button>
      </Flex>
      <FoodsTab />
    </Flex>
  );
};

export default FoodsPage;
