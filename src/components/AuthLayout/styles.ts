import { defineStyle, HeadingProps, ImgProps, StackProps } from '@chakra-ui/react'

export const mainStyles = defineStyle({
  as: 'main',
  alignItems: 'center',
  bgColor: 'white',
  position: 'relative',
  zIndex: 0,
  maxW: '100%',
  minH: '100vh',
  gap: 0,
}) as StackProps

export const dayTextStyles = defineStyle({
  fontWeight: 500,
  fontSize: '114px',
  lineHeight: '130px',
  as: 'h1',
}) as HeadingProps

export const standardLabelStyles = defineStyle({
  fontWeight: 700,
  fontSize: 39,
  lineHeight: '30px',
})

export const dayBlockStyles = defineStyle({
  position: 'absolute',
  gap: '13px',
  top: '91px',
  left: '104px',
}) as StackProps

export const dateContainer = defineStyle({
  position: 'absolute',
  gap: '15px',
  right: '38px',
  bottom: '39px',
  alignItems: 'center',
}) as StackProps

export const dateTextStyles = defineStyle({
  fontWeight: 700,
  fontSize: '45px',
  lineHeight: '50px',
  letterSpacing: '1.5px',
  mb: '5px',
})

export const langMarkStyles = defineStyle({
  w: '40px',
  h: '37px',
  border: '2px solid',
  borderRadius: '10px',
  borderColor: 'borderColor',
  fontWeight: 900,
  fontSize: '15px',
  letterSpacing: '1.5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const bottomCornerStyles = defineStyle({
  src: 'corners/bottom_corner.svg',
  position: 'absolute',
  bottom: 0,
  left: 0,
}) as ImgProps

export const topCornerStyles = defineStyle({
  src: 'corners/top_corner.svg',
  position: 'absolute',
  top: 0,
  right: 0,
}) as ImgProps
