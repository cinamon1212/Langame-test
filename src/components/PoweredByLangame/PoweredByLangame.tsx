import { LogoLabel } from '@/icons'
import { HStack, StackProps, Text } from '@chakra-ui/react'
import { poweredByTextStyles, softwareTextStyles } from './styles'

export const PoweredByLangame = (props: StackProps) => {
  return (
    <HStack {...props}>
      <Text {...poweredByTextStyles}>Powered by</Text>
      <LogoLabel />
      <Text {...softwareTextStyles}>Software</Text>
    </HStack>
  )
}
