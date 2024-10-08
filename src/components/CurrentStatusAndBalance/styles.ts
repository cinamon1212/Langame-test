import { defineStyle, HeadingProps, StackProps, TextProps } from '@chakra-ui/react'

export const sessionLineStackStyles = defineStyle({
  justifyContent: 'space-between',
  w: '100%',
})

export const sessionInfoValueStyles = defineStyle({
  fontWeight: 700,
})

export const currentStatusAndBalanceStyles = defineStyle({
  as: 'section',
  w: '536px',
  justifyContent: 'flex-start',
  gap: '25px',
  alignItems: 'flex-start',
  h: '100%',
}) as StackProps

export const mainBalanceTextStyles = defineStyle({
  fontSize: '15px',
  lineHeight: '22px',
  textTransform: 'uppercase',
}) as TextProps

export const balanceHeadingStyles = defineStyle({
  fontWeight: 900,
  fontSize: '34px',
  lineHeight: '22px',
  as: 'h2',
  display: 'flex',
  gap: '8px',
}) as HeadingProps

export const pSymbolStyles = defineStyle({
  fontWeight: 500,
  as: 'span',
}) as TextProps

export const bonusBalanceStack = defineStyle({
  borderRadius: '11px',
  bgColor: 'rgba(0,0,0,0.09)',
  p: '7px 17px 10px 19px',
  fontSize: '15px',
  lineHeight: '22px',
  gap: 0,
  alignItems: 'flex-start',
})

export const bonusBalanceValue = defineStyle({
  fontWeight: 900,
  display: 'flex',
  gap: '4px',
})

export const bonusValueSpanStyles = defineStyle({
  as: 'span',
  fontSize: '9px',
  lineHeight: '12px',
  fontWeight: 400,
}) as TextProps

export const redBtnStyles = defineStyle({
  variant: 'red',
  w: '100%',
  mt: '31px',
  h: '42px',
})

export const csgoImgStyles = defineStyle({
  minW: '555px',
  h: '333px',
  src: 'csgo.svg',
  alt: 'csgo',
  mt: '4px',
})
