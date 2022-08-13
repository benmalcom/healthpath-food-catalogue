import {
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import {
  AiOutlineAppstore,
  AiOutlinePlusCircle,
  AiOutlineUser,
} from 'react-icons/ai';
import CatalogueTabPanel from 'components/page-components/foods/CatalogueTabPanel';

const tabProps = {
  color: 'gray.700',
  _hover: {
    color: 'primary',
  },
  _active: {
    colorScheme: 'primary',
  },
};
export const FoodsTab = () => {
  return (
    <Tabs colorScheme="primary" w="full">
      <TabList>
        <Tab {...tabProps}>
          <Text fontSize="16px" fontWeight={700} color="inherit">
            <Icon
              as={AiOutlineAppstore}
              color="inherit"
              verticalAlign="sub"
              mr={1}
            />
            Catalogue
          </Text>
        </Tab>
        <Tab {...tabProps}>
          <Text fontSize="16px" fontWeight={700} color="inherit">
            <Icon
              as={AiOutlineUser}
              color="inherit"
              verticalAlign="sub"
              mr={1}
            />
            My Meal Plan
          </Text>
        </Tab>
        <Tab {...tabProps}>
          <Text fontSize="16px" fontWeight={700} color="inherit">
            <Icon
              as={AiOutlinePlusCircle}
              color="inherit"
              verticalAlign="sub"
              mr={1}
            />
            Recommendations{' '}
          </Text>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel px={0}>
          <CatalogueTabPanel />
        </TabPanel>
        <TabPanel>
          <p> My Meal Plan!</p>
        </TabPanel>
        <TabPanel>
          <p>Recommendations!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

FoodsTab.propTypes = {};
export default FoodsTab;
