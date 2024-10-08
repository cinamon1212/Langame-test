import { defineStyle, HeadingProps, StackProps } from '@chakra-ui/react'

export const affordableRatesSection = defineStyle({
  as: 'section',
  p: '35px 32px',
  bgGradient: 'linear(162.3deg, #3D3D3D -12.88%, #434343 51.15%, #606060 108.84%)',
  h: '722px',
  w: '411px',
  borderRadius: '26px',
  boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.04)',
  alignItems: 'flex-start',
  gap: '37px',
  ml: '14px',
}) as StackProps

export const headingStyles = defineStyle({
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '15px',
  lineHeight: '18px',
  as: 'h3',
  color: 'white',
}) as HeadingProps

export const grayLineStyles = defineStyle({
  h: '1px',
  w: '345px',
  opacity: 0.12,
  bgColor: 'white',
  alignSelf: 'center',
})

export const rateItemStack = defineStyle({
  color: 'white',
  lineHeight: '13px',
  justifyContent: 'space-between',
  w: '100%',
})

export const rateTextStyles = defineStyle({
  fontSize: '13px',
  opacity: 0.8,
})

export const ratePriceStyles = defineStyle({
  fontSize: '17px',
  fontWeight: 700,
})
