import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
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
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';
import DropDown from 'components/page-components/foods/DropDown';

const tabProps = {
  color: 'gray.700',
  _hover: {
    color: 'primary',
  },
  _active: {
    colorScheme: 'primary',
  },
};

export const Foods = () => {
  return (
    <Flex w="full" h="full" direction="column" py="20px" px="25px">
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
      <Tabs colorScheme="primary">
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
          <Tab {...tabProps} isDisabled>
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
          <Tab {...tabProps} isDisabled>
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
            <Flex my="25px" align="center" justify="space-between">
              <Flex columnGap={5}>
                <DropDown
                  onSelect={undefined}
                  title="Category"
                  options={[
                    { label: 'All', value: 'all' },
                    { label: 'None', value: 'none' },
                  ]}
                />

                <DropDown
                  onSelect={undefined}
                  title="Foods"
                  options={[
                    { label: 'All', value: 'all' },
                    { label: 'None', value: 'none' },
                  ]}
                />
              </Flex>
              <Flex>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      <Icon
                        as={AiOutlineSearch}
                        w="24px"
                        h="24px"
                        fontWeight={700}
                        color="primary.500"
                      />
                    }
                  />
                  <Input
                    color="gray.500"
                    bg="white"
                    type="tel"
                    placeholder="Search"
                    borderRadius="28px"
                    boxShadow="0px 0px 1px rgba(10, 31, 68, 0.1), 0px 1px 1px rgba(51, 91, 130, 0.12)"
                    _focus={{ outline: 'none', border: 'none' }}
                  />
                </InputGroup>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p> My Meal Plan!</p>
          </TabPanel>
          <TabPanel>
            <p>Recommendations!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Foods;
