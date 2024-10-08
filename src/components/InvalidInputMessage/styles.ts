import { defineStyle, TextProps } from '@chakra-ui/react'

export const invalidMessageStyles = defineStyle({
  color: 'primary.100',
  fontSize: '9px',
  lineHeight: '12px',
  fontWeight: 900,
  textTransform: 'uppercase',
  alignSelf: 'flex-start',
}) as TextProps
