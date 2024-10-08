import { footerLinks } from '@/constants'
import { VStack, HStack, Text, StackProps } from '@chakra-ui/react'
import { infoStack, linkStackStyles } from './styles'
import { PoweredByLangame } from '../PoweredByLangame'

export const AuthFooter = ({ mt }: StackProps) => {
  return (
    <VStack {...infoStack} mt={mt}>
      <HStack {...linkStackStyles}>
        {footerLinks.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </HStack>
      <PoweredByLangame gap={'5px'} />
    </VStack>
  )
}
