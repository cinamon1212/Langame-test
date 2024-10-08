import { defineStyle, StackProps } from '@chakra-ui/react'

export const infoStack = defineStyle({
  gap: '19px',
  pb: '17px',
  as: 'footer',
}) as StackProps

export const linkStackStyles = defineStyle({
  gap: '19px',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '24px',
})
