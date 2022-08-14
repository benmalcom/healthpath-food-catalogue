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
  paddingInline: 0,
  marginRight: { base: '7px', md: '20px' },
};

const textProps = {
  fontSize: { base: '11.2px', sm: '11.5px', md: '16px' },
  fontWeight: 700,
  color: 'inherit',
};
export const FoodsTab = () => {
  return (
    <Tabs colorScheme="primary" w="full">
      <TabList>
        <Tab {...tabProps}>
          <Text {...textProps}>
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
          <Text {...textProps}>
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
          <Text {...textProps}>
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
