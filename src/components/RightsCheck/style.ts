import { BoxProps, defineStyle, StackProps, TextProps } from '@chakra-ui/react'

export const rightsStackStyles = defineStyle({
  w: '61px',
  padding: '6px',
  h: '34px',
  bgColor: 'rgba(231, 231, 231, 0.34)',
  borderRadius: '27px',
  cursor: 'pointer',
}) as BoxProps

export const statusIconStackStyles = defineStyle({
  w: '23px',
  h: '23px',
  transition: 'transform 0.5s, background-color 0.5s',
}) as StackProps

export const rightsTextStyles = defineStyle({
  fontSize: '13px',
  lineHeight: '17.42px',
})

export const invalidMessageStyles = defineStyle({
  color: 'primary.100',
  fontSize: '9px',
  lineHeight: '12px',
  fontWeight: 900,
  textTransform: 'uppercase',
  alignSelf: 'flex-start',
  ml: '6px',
}) as TextProps
