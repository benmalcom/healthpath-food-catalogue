import { Grid } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import FoodCard from 'components/page-components/foods/FoodCard';

export const FoodList = ({ foods }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 100%)',
        md: 'repeat(2, 336px)',
        xl: 'repeat(3, 336px)',
      }}
      flex={1}
      gap="32px"
      overflow="auto"
      minH={0}
    >
      {foods?.map(food => (
        <FoodCard food={food} key={food.id} />
      ))}
    </Grid>
  );
};

FoodList.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ),
};
export default FoodList;
