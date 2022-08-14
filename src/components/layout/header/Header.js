import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Logo from 'components/layout/header/HeaderLogo';
import MenuRight from 'components/layout/header/MenuRight';
import MobileBasket from 'components/layout/header/MobileBasket';
import MobileMenu from 'components/layout/header/MobileMenu';

export const Header = ({ onClickMobileMenu, isSidebarOpen }) => {
  return (
    <Flex
      w="full"
      h={{
        base: '48px',
        xl: '104px',
      }}
      p={{
        base: '8px 16px',
        xl: 'auto',
      }}
      bg="gray.900"
      justify="center"
    >
      <Flex
        w="full"
        h="full"
        align="center"
        justify="space-between"
        boxSizing="border-box"
        width="1408px"
      >
        <MobileMenu onClick={onClickMobileMenu} isSidebarOpen={isSidebarOpen} />
        <Logo />
        <MenuRight />
        <MobileBasket />
      </Flex>
    </Flex>
  );
};

Header.propTypes = {
  onClickMobileMenu: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool,
};

export default Header;
