import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import FoodsTab from 'components/page-components/foods/FoodsTab';

export const FoodsPage = () => {
  return (
    <Flex w="full" h="full" direction="column">
      <Flex
        w="full"
        direction={{
          base: 'column',
          lg: 'row',
        }}
        justify={{
          lg: 'space-between',
        }}
        mb={{
          base: 'unset',
          lg: '25px',
        }}
        align={{
          base: 'flex-start',
          lg: 'center',
        }}
      >
        <Flex direction="column">
          <Text
            fontSize={{ base: '30px', lg: '40px' }}
            fontWeight={500}
            color="gray.800"
            lineHeight="48px"
          >
            Foods
          </Text>
          <Text
            fontSize={{ base: '16px', lg: '18px' }}
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
          my={{ base: '20px', sm: '20px', lg: 'unset' }}
        >
          Create meal plan
        </Button>
      </Flex>
      <FoodsTab />
    </Flex>
  );
};

export default FoodsPage;
