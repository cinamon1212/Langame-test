import { defineStyle, HeadingProps, StackProps, TextProps } from '@chakra-ui/react'

export const currentSectionStyles = defineStyle({
  as: 'section',
  alignItems: 'flex-start',
  w: '536px',
  gap: 0,
}) as StackProps

export const sessionInformationStyles = defineStyle({
  gap: '48px',
  w: '536px',
  h: '230px',
  alignItems: 'flex-start',
  mt: '39px',
  fontSize: '15px',
  fontWeight: 400,
})

export const sessionInfoTitleStyles = defineStyle({
  textTransform: 'uppercase',
  lineHeight: '22px',
}) as TextProps

export const sessionLineStackStyles = defineStyle({
  justifyContent: 'space-between',
  w: '100%',
})

export const nameTextStyles = defineStyle({
  fontWeight: 700,
  fontSize: '17px',
  lineHeight: '23px',
  pb: '5px',
  as: 'h1',
}) as HeadingProps

export const avatarImgStyles = defineStyle({
  w: '89px',
  h: '89px',
  src: 'avatar.svg',
  alt: 'avatar',
})

export const avatarWrapperStyles = defineStyle({
  gap: 0,
  mt: '3px',
  position: 'relative',
  right: '18px',
}) as StackProps

export const infoWithImgWrapperStyles = defineStyle({
  gap: '22px',
  alignItems: 'flex-start',
})

export const infoLinesWrapperStyles = defineStyle({
  gap: '23px',
  w: '100%',
  lineHeight: '24px',
})
