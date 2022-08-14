import { Box, Flex, Image } from '@chakra-ui/react';

export const LogoFull = boxProps => (
  <Box {...boxProps}>
    <Image src="images/logo-full.png" />
  </Box>
);

export const MobileLogo = boxProps => (
  <Box {...boxProps} w="29.86px" h="25.09px">
    <Image src="images/logo.png" />
  </Box>
);

const HeaderLogo = flexProps => (
  <Flex align="center" justify="space-between" {...flexProps}>
    <LogoFull
      display={{
        base: 'none',
        sm: 'none',
        md: 'none',
        xl: 'block',
        '2xl': 'block',
      }}
    />

    <MobileLogo
      display={{
        base: 'block',
        sm: 'block',
        md: 'block',
        xl: 'none',
        '2xl': 'none',
      }}
    />
  </Flex>
);

export default HeaderLogo;
