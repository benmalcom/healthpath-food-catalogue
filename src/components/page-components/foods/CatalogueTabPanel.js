import { Flex, Spinner } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import Catalogue from 'components/page-components/foods/Catalogue';
import CatalogueFilter from 'components/page-components/foods/CatalogueFilter';
import { getCatalogue } from 'services/food';

export const CatalogueTabPanel = () => {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [catalogue, setCatalogue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCatalogue()
      .then(response => {
        setCatalogue(response.data);
      })
      .catch(err => setCatalogue([]))
      .finally(() => setIsLoading(false));

    return () => {};
  }, []);

  const filteredCatalogue = useMemo(() => {
    return catalogue.filter(({ name }) =>
      name.toUpperCase().includes(currentFilter?.text?.trim().toUpperCase())
    );
  }, [catalogue, currentFilter?.text]);

  if (isLoading)
    return (
      <Flex align="center" justify="center" w="full" h="full" mt={20}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="primary.500"
          size="xl"
        />
      </Flex>
    );
  return (
    <>
      <CatalogueFilter
        value={{ text: '' }}
        onFilter={filter => setCurrentFilter(filter)}
      />
      <Catalogue catalogue={filteredCatalogue} />
    </>
  );
};

export default CatalogueTabPanel;
