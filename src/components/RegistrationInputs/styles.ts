import { defineStyle, StackProps } from '@chakra-ui/react'

export const registrationInputsStyles = defineStyle({
  w: '638px',
  gap: 0,
}) as StackProps

export const gridLayoutStyles = defineStyle({
  gridTemplateColumns: 'repeat(2, 1fr)',
  mt: '14px',
  rowGap: '17px',
  columnGap: '35px',
  w: '100%',
})
