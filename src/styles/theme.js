import { extendTheme } from '@chakra-ui/react';

// example theme

const generalButtonProps = {
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '20px',
  textAlign: 'center',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  padding: '18px 40px',
  borderRadius: '50px',
};

const colors = {
  brand: {
    primary: '#199BB5',
  },
  gray: {
    700: '#686D71',
    900: '#35353D',
  },
  primary: {
    default: '#199BB5',
    hover: '#47AFC4',
    active: '#108CA5',
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'Cera Pro', sans-serif`,
    body: `'Cera Pro', sans-serif`,
  },
  colors,
  components: {
    Button: {
      variants: {
        'outline-white': {
          ...generalButtonProps,
          backgroundColor: 'transparent',
          border: '4px solid white',
          color: 'white',
          boxShadow: 'none',
          _disabled: {
            opacity: 0.37,
            boxShadow: 'none',
          },
        },
        outline: {
          ...generalButtonProps,
          backgroundColor: 'white',
          border: '4px solid',
          borderColor: 'brand.primary',
          color: 'brand.primary',
        },
        primary: {
          ...generalButtonProps,
          color: 'white',
          boxShadow:
            '0px 0px 1px rgba(32, 37, 43, 0.1), 0px 4px 8px rgba(51, 91, 130, 0.12)',
          backgroundColor: 'brand.primary',
          _hover: {
            backgroundColor: 'primary.hover',
            boxShadow: 'none',
          },
          _active: {
            backgroundColor: 'primary.active',
            boxShadow: 'none',
          },
          _disabled: {
            opacity: 0.3,
            boxShadow: 'none',
            pointerEvents: 'none',
          },
        },
      },
    },
  },
});

export default theme;
