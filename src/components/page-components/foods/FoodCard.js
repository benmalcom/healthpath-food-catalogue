import { Button, GridItem, Text, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const FoodCard = ({ food }) => (
  <GridItem
    maxW={{ base: '317px', md: '336px' }}
    m={{ base: '0 auto', md: 'unset' }}
    h="317px"
    bg="white"
    padding="32px 24px 24px"
    boxShadow="0px 0px 1px rgba(32, 37, 43, 0.1), 0px 4px 8px rgba(51, 91, 130, 0.12);"
    _hover={{
      boxShadow:
        '0px 0px 1px rgba(32, 37, 43, 0.1), 0px 18px 18px rgba(32, 37, 43, 0.12)',
    }}
    borderRadius="8px"
  >
    <VStack justify="space-between" h="full" w="full" textAlign="center">
      <VStack flex={1} w="full">
        <Text
          w="full"
          color="gray.600"
          fontSize="12px"
          fontWeight={700}
          h="16px"
          noOfLines={2}
          textTransform="uppercase"
        >
          {food.tags}
        </Text>
        <Text
          w="full"
          color="gray.800"
          fontSize="24px"
          fontWeight={700}
          lineHeight="30px"
          letterSpacing="-0.2px"
          textAlign="center"
          noOfLines={2}
        >
          {food.name}
        </Text>

        <Text
          noOfLines={4}
          fontSize="14px"
          fontWeight={400}
          color="gray.700"
          textAlign="center"
        >
          {food.description}
        </Text>
      </VStack>
      <Button variant="outline">Recommend</Button>
    </VStack>
  </GridItem>
);

FoodCard.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
export default FoodCard;
