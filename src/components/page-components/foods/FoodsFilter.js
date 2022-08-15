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

export const FoodsFilter = ({ onFilter, value }) => {
  const [filter, setFilter] = useState({ ...value });
  useEffect(() => {
    onFilter?.(filter);
  }, [filter, onFilter]);
  return (
    <Flex
      my={{ base: ' 25px', lg: '40px' }}
      align={{
        base: 'center',
        md: 'flex-start',
        '2xl': 'center',
      }}
      flexDirection={{
        base: 'column',
        lg: 'unset',
      }}
      justify={{ md: 'space-between' }}
      w="full"
    >
      <Flex
        columnGap={5}
        w={{
          base: 'full',
          lg: 'unset',
        }}
      >
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
      <Flex
        mt={{
          base: '25px',
          lg: 'unset',
        }}
        w={{
          base: 'full',
          md: '428px',
        }}
      >
        <InputGroup w="full">
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
            type="text"
            value={filter?.text}
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

FoodsFilter.propTypes = {
  onFilter: PropTypes.func,
  value: PropTypes.object,
};
export default FoodsFilter;
