import { Flex, Spinner } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import FoodList from 'components/page-components/foods/FoodList';
import FoodsFilter from 'components/page-components/foods/FoodsFilter';
import { getFoods } from 'services/food';

export const FoodsTabPanel = () => {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getFoods()
      .then(response => {
        setFoods(response.data);
      })
      .catch(err => setFoods([]))
      .finally(() => setIsLoading(false));

    return () => {};
  }, []);

  const filteredFoods = useMemo(() => {
    return foods.filter(({ name }) =>
      name.toUpperCase().includes(currentFilter?.text?.trim().toUpperCase())
    );
  }, [foods, currentFilter?.text]);

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
      <FoodsFilter
        value={{ text: '' }}
        onFilter={filter => setCurrentFilter(filter)}
      />
      <FoodList foods={filteredFoods} />
    </>
  );
};

export default FoodsTabPanel;
