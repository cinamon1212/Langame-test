import { Box, Heading, HStack, Img, Text, VStack } from '@chakra-ui/react'
import {
  dateContainer,
  dateTextStyles,
  dayBlockStyles,
  dayTextStyles,
  langMarkStyles,
  mainStyles,
  standardLabelStyles,
  bottomCornerStyles,
  topCornerStyles,
} from './styles'
import { PropsWithChildren } from 'react'
import { AuthFooter } from '../AuthFooter'

type Props = {
  mt: string
}

export const AuthLayout = ({ children, mt }: PropsWithChildren<Props>) => {
  return (
    <VStack {...mainStyles}>
      <Img {...bottomCornerStyles} />
      <Img {...topCornerStyles} />
      <VStack {...dayBlockStyles}>
        <Heading {...dayTextStyles}>23</Heading>
        <Text {...standardLabelStyles}>Стандарт</Text>
      </VStack>
      <HStack {...dateContainer}>
        <Box {...langMarkStyles}>EN</Box>
        <Text {...dateTextStyles}>16 : 40</Text>
      </HStack>
      {children}
      <AuthFooter mt={mt} />
    </VStack>
  )
}
