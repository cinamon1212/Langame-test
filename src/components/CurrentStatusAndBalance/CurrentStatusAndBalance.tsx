import { VStack, HStack, Text, Image, Button, Heading } from '@chakra-ui/react'
import { WhiteContainer } from '../WhiteContainer'
import {
  balanceHeadingStyles,
  bonusBalanceStack,
  bonusBalanceValue,
  bonusValueSpanStyles,
  csgoImgStyles,
  currentStatusAndBalanceStyles,
  mainBalanceTextStyles,
  pSymbolStyles,
  redBtnStyles,
  sessionInfoValueStyles,
  sessionLineStackStyles,
} from './styles'

export const CurrentStatusAndBalance = () => {
  return (
    <VStack {...currentStatusAndBalanceStyles}>
      <WhiteContainer gap={'20px'} lineHeight={'13px'}>
        <HStack {...sessionLineStackStyles}>
          <Text>Текущий статус: </Text>
          <Text {...sessionInfoValueStyles} textTransform={'uppercase'}>
            Standart
          </Text>
        </HStack>
        <HStack {...sessionLineStackStyles}>
          <Text>До смены статуса осталось:</Text>
          <Text {...sessionInfoValueStyles}>10 часов 23 минуты</Text>
        </HStack>
      </WhiteContainer>
      <WhiteContainer gap={0}>
        <HStack justifyContent={'space-between'} w={'100%'}>
          <Text {...mainBalanceTextStyles}>Основной счёт</Text>
          <Image src='icons/refresh_icon.svg' />
        </HStack>
        <HStack gap={'17px'} mt={'21px'}>
          <Heading {...balanceHeadingStyles}>
            15 000 <Text {...pSymbolStyles}>₽</Text>
          </Heading>
          <VStack {...bonusBalanceStack}>
            <Text {...bonusBalanceValue}>
              1 200 <Text {...pSymbolStyles}>₽</Text>
            </Text>
            <Text {...bonusValueSpanStyles}>Бонусный счёт</Text>
          </VStack>
        </HStack>
        <Button {...redBtnStyles}>Пополнить</Button>
      </WhiteContainer>
      <Image {...csgoImgStyles} />
    </VStack>
  )
}
