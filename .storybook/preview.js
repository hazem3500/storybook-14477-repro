import { ChakraProvider } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react';
import React, { useEffect } from 'react';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};

export const decorators = [
  (Story, { globals: { theme = 'light' } }) => {
    const { colorMode, setColorMode } = useColorMode();
    useEffect(() => {
      if (colorMode !== theme) setColorMode(theme)
    }, [theme, colorMode]);
    return <Story />;
  },
  (Story) => <ChakraProvider><Story /></ChakraProvider>
]