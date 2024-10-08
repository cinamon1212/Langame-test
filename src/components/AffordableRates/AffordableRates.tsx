import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import {
  affordableRatesSection,
  grayLineStyles,
  headingStyles,
  rateItemStack,
  ratePriceStyles,
  rateTextStyles,
} from './styles'
import { affordableRates } from '@/constants'

export const AffordableRates = () => {
  return (
    <VStack {...affordableRatesSection}>
      <Heading {...headingStyles}>Тарифы, доступные на данном ПК</Heading>
      <Box {...grayLineStyles} />
      {affordableRates.map(({ price, text }) => (
        <>
          <HStack {...rateItemStack}>
            <Text {...rateTextStyles}>{text}</Text>
            <Text {...ratePriceStyles}>
              {price}{' '}
              <Text as={'span'} fontWeight={400}>
                ₽
              </Text>
            </Text>
          </HStack>
          <Box {...grayLineStyles} />
        </>
      ))}
    </VStack>
  )
}
