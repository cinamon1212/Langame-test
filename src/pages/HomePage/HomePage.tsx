import { HStack, VStack } from '@chakra-ui/react'
import { homePageWrapper, mainBgStyles, powerByLangameStyles } from './styles'
import {
  AffordableRates,
  CurrentSession,
  CurrentStatusAndBalance,
  Features,
  PoweredByLangame,
  Services,
} from '@/components'

export const HomePage = () => {
  return (
    <HStack {...homePageWrapper}>
      <Services />
      <VStack {...mainBgStyles}>
        <HStack gap={'32px'} alignItems={'flex-start'}>
          <CurrentSession />
          <CurrentStatusAndBalance />
          <AffordableRates />
        </HStack>
        <Features />
        <PoweredByLangame {...powerByLangameStyles} />
      </VStack>
    </HStack>
  )
}
