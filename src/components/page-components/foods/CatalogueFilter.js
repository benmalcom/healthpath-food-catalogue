import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import DropDown from 'components/page-components/foods/DropDown';

export const CatalogueFilter = ({ onFilter, value }) => {
  const [filter, setFilter] = useState({ ...value });
  useEffect(() => {
    onFilter?.(filter);
  }, [filter, onFilter]);
  return (
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
            onChange={e =>
              setFilter(current => ({
                ...current,
                [e.target.name]: e.target.value,
              }))
            }
            name="text"
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
  );
};

CatalogueFilter.propTypes = {
  onFilter: PropTypes.func,
  value: PropTypes.object,
};
export default CatalogueFilter;
