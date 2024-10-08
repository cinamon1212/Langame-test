import { StackProps, VStack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { whiteSectionStyles } from './styles'

export const WhiteContainer = ({ children, ...props }: PropsWithChildren<StackProps>) => {
  return (
    <VStack {...whiteSectionStyles} {...props}>
      {children}
    </VStack>
  )
}
