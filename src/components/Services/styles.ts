import { defineStyle, StackProps } from '@chakra-ui/react'

export const servicesAsideStyles = defineStyle({
  as: 'aside',
  minW: '247px',
  pt: '71px',
  h: '100%',
  gap: 0,
  mb: 'auto',
}) as StackProps

export const logoLabelStyles = defineStyle({
  w: '139px',
  h: '14.28px',
  viewBox: '0 0 87 13',
})

export const logoIconStyles = defineStyle({
  w: '29px',
  h: '33.5px',
  viewBox: '0 0 36 41',
})

export const grayLineStyles = defineStyle({
  w: '100%',
  h: '2px',
  bgColor: 'rgba(219, 219, 219, 1)',
})

export const serviceItemStyles = defineStyle({
  gap: '23px',
  p: '38px 30px 30px 30px',
})

export const serviceTextStyles = defineStyle({
  fontWeight: 700,
  fontSize: '13px',
  lineHeight: '14px',
})
