import { Flex, Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

export const MobileMenu = ({ onClick, isSidebarOpen, ...flexProps }) => (
  <Flex
    display={{
      base: 'flex',
      xl: 'none',
    }}
    {...flexProps}
  >
    <Icon
      onClick={onClick}
      as={isSidebarOpen ? AiOutlineClose : GiHamburgerMenu}
      w="32px"
      h="32px"
      color="white"
      cursor="pointer"
    />
  </Flex>
);
MobileMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool,
};
export default MobileMenu;
