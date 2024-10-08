import { defineStyle, InputLeftElementProps, InputProps, TextProps } from '@chakra-ui/react'

export const inputLeftElementStyles = defineStyle({
  pointerEvents: 'none',
  h: '100%',
  w: '60px',
}) as InputLeftElementProps

export const inputStyles = defineStyle({
  border: 'none',
  focusBorderColor: 'none',
  fontWeight: 900,
  fontSize: '17px',
  lineHeight: '17px',
  variant: 'unstyled',
  w: '100%',
  _placeholder: {
    color: 'placeholderColor',
    fontWeight: 300,
    fontSize: '15px',
    lineHeight: '15px',
  },
}) as InputProps

export const inputRightElemStyles = defineStyle({
  w: 'fit-content',
  mt: '49px',
  h: 'fit-content',
})

export const showPasswordButton = defineStyle({
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '11px',
  lineHeight: '11px',
  cursor: 'pointer',
}) as TextProps

export const labelStyles = defineStyle({
  as: 'label',
  fontSize: '13px',
  lineHeight: '12px',
  color: 'secondary',
  alignSelf: 'flex-start',
}) as TextProps

export const inputGroupStyles = defineStyle({
  bgColor: 'inputBgColor',
  borderRadius: '8px',
  h: '82px',
  w: '100%',
})

export const labelWithInputStack = defineStyle({
  pl: '60px',
  gap: '8px',
  w: '90%',
})
