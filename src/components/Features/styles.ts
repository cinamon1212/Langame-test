import { defineStyle, StackProps, TextProps } from '@chakra-ui/react'

export const featuresArticle = defineStyle({
  as: 'article',
  gap: '40px',
  mt: '42px',
}) as StackProps

export const featureItemStyles = defineStyle({
  borderRadius: '22px',
  p: '28px 32px 35px',
  gap: '30px',
  w: '280px',
  cursor: 'pointer',
})

export const featureTextStyles = defineStyle({
  fontWeight: 700,
  textTransform: 'uppercase',
  lineHeight: '13px',
}) as TextProps
