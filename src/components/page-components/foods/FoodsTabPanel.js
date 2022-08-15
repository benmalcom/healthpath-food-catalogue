import { Button, Flex, Spinner, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import FoodList from 'components/page-components/foods/FoodList';
import FoodsFilter from 'components/page-components/foods/FoodsFilter';
import { getFoods } from 'services/food';

export const FoodsTabPanel = () => {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [foods, setFoods] = useState(undefined);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFoods = useCallback(() => {
    setIsLoading(true);
    getFoods()
      .then(response => {
        setFoods(response.data);
      })
      .catch(err => {
        setFoods([]);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchFoods();
    return () => {
      setFoods(undefined);
      setError(false);
    };
  }, [fetchFoods]);

  const filteredFoods = useMemo(() => {
    return foods?.filter(({ name }) =>
      name.toUpperCase().includes(currentFilter?.text?.trim().toUpperCase())
    );
  }, [foods, currentFilter?.text]);

  if (isLoading || !foods)
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

  if (!isLoading && error)
    return (
      <Flex
        flexDirection="column"
        align="center"
        justify="center"
        w="full"
        mt={30}
      >
        <Text>An Error occurred while fetching your food catalogue.</Text>
        <Button variant="primary" mt={5} onClick={fetchFoods}>
          Try again
        </Button>
      </Flex>
    );

  return (
    <>
      <FoodsFilter
        value={{ text: '' }}
        onFilter={filter => setCurrentFilter(filter)}
      />
      <FoodList foods={filteredFoods} />
    </>
  );
};

export default FoodsTabPanel;
