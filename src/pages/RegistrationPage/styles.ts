import { ButtonProps, defineStyle, HeadingProps, ImgProps, StackProps } from '@chakra-ui/react'

export const registrationSection = defineStyle({
  mt: '91px',
  gap: 0,
}) as StackProps

export const registrationHeading = defineStyle({
  as: 'h1',
  fontWeight: 700,
  fontSize: '25px',
  lineHeight: '23px',
}) as HeadingProps

export const buttonWrapper = defineStyle({
  gap: '25px',
  my: '55px',
})

export const buttonStyles = defineStyle({
  w: '156px',
  h: '37px',
  fontSize: '11px',
  lineHeight: '11px',
})

export const infoIconStyles = defineStyle({
  src: 'icons/info_icon.svg',
  position: 'absolute',
  right: '14px',
}) as ImgProps

export const registrationButton = defineStyle({
  variant: 'red',
  mt: '33px',
  type: 'submit',
}) as ButtonProps

export const goOnLoginPage = defineStyle({
  border: '1px solid rgba(0, 0, 0, 0.29)',
  bgColor: 'white',
  color: 'black',
  mt: '47px',
  display: 'flex',
  gap: '11px',
  w: '100%',
  h: '46px',
  lineHeight: '16.8px',
  fontSize: '17px',
})
