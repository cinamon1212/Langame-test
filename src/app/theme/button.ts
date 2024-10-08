import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  baseStyle: {
    textTransform: 'uppercase',
    borderRadius: '34px',
    fontWeight: '700',
  },
  variants: {
    red: {
      color: 'white',
      bgColor: 'primary.100',
      boxShadow: '0px 4px 7px 0px rgba(220, 0, 0, 0.17)',
      _hover: {
        bgColor: 'primary.700',
      },
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
  },
})
