import { ButtonProps, defineStyle, StackProps } from '@chakra-ui/react'

export const logoLabelStyles = defineStyle({
  w: '124px',
  h: '17.28px',
  viewBox: '0 0 87 13',
})

export const logoIconStyles = defineStyle({
  w: '35.41px',
  h: '41px',
  viewBox: '0 0 36 41',
})

export const loginForm = defineStyle({
  mt: '183px',
  w: '339px',
  as: 'section',
  gap: 0,
}) as StackProps

export const forgetTextStyles = defineStyle({
  fontSize: '12px',
  lineHeight: '12px',
  mt: '29px',
})

export const enterButtonStyles = defineStyle({
  variant: 'red',
  mt: '49px',
  w: '100%',
  p: 0,
  h: '44px',
  fontSize: '14px',
  lineHeight: '16.8px',
}) as ButtonProps

export const inputWrapper = defineStyle({
  gap: '21px',
  w: '100%',
  mt: '66px',
})
