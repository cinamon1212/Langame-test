import { defineStyle, ImageProps, StackProps } from '@chakra-ui/react'

export const mainBgStyles = defineStyle({
  bgColor: 'surface',
  as: 'main',
  w: 'auto',
  borderRadius: '44px',
  p: '50px 66px 45px 46px',
  alignItems: 'flex-start',
  gap: 0,
}) as StackProps

export const sessionLineStackStyles = defineStyle({
  justifyContent: 'space-between',
  w: '100%',
})

export const sessionInfoValueStyles = defineStyle({
  fontWeight: 700,
})

export const cyberpunkImgStyles = defineStyle({
  minW: '552px',
  h: '345px',
  src: 'cyberpunk.svg',
  alt: 'cyberpunk',
  position: 'relative',
  right: '14px',
}) as ImageProps

export const powerByLangameStyles = defineStyle({ gap: '5px', mt: '54px', alignSelf: 'flex-end' })

export const homePageWrapper = defineStyle({ gap: 0, w: 'auto', maxW: '1920px', m: '0 auto' })
