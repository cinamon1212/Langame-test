import { defineStyle, TextProps } from '@chakra-ui/react'

export const poweredByTextStyles = defineStyle({
  as: 'span',
  fontWeight: 400,
  fontSize: '15px',
  lineHeight: '24px',
}) as TextProps

export const softwareTextStyles = defineStyle({
  fontWeight: 900,
  fontSize: '15px',
  lineHeight: '24px',
  textTransform: 'uppercase',
}) as TextProps
