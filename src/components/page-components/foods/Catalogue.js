import { Grid } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import CatalogueItem from 'components/page-components/foods/CatalogueItem';

export const Catalogue = ({ catalogue }) => {
  return (
    <Grid
      templateColumns="repeat(3, 336px)"
      flex={1}
      gap="32px"
      overflow="auto"
      minH={0}
    >
      {catalogue?.map(item => (
        <CatalogueItem catalogueItem={item} key={item.id} />
      ))}
    </Grid>
  );
};

Catalogue.propTypes = {
  catalogue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ),
};
export default Catalogue;
