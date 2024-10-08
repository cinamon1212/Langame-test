import { registrationPagePath } from '@/constants'
import { defineStyle } from '@chakra-ui/react'

export const dontHaveAccTextStyles = defineStyle({
  fontSize: '13px',
  lineHeight: '15.6px',
})

export const registrationLinkStyles = defineStyle({
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '14px',
  color: 'primary.100',
  href: registrationPagePath,
})
