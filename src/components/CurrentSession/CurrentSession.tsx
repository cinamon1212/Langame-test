import { sessionInfoValueStyles, cyberpunkImgStyles } from '@/pages/HomePage/styles'
import { VStack, HStack, Text, Image, Heading } from '@chakra-ui/react'
import { WhiteContainer } from '../WhiteContainer'
import {
  avatarImgStyles,
  avatarWrapperStyles,
  currentSectionStyles,
  infoLinesWrapperStyles,
  infoWithImgWrapperStyles,
  nameTextStyles,
  sessionInformationStyles,
  sessionInfoTitleStyles,
  sessionLineStackStyles,
} from './styles'

export const CurrentSession = () => {
  return (
    <VStack {...currentSectionStyles}>
      <HStack {...avatarWrapperStyles}>
        <Image {...avatarImgStyles} />
        <Heading {...nameTextStyles}>Алексей Костылев Николаевич</Heading>
      </HStack>
      <VStack {...infoWithImgWrapperStyles}>
        <WhiteContainer {...sessionInformationStyles}>
          <Text {...sessionInfoTitleStyles}>Информация о текущей сесии</Text>
          <VStack {...infoLinesWrapperStyles}>
            <HStack {...sessionLineStackStyles}>
              <Text>Осталось минут:</Text>
              <Text {...sessionInfoValueStyles}>120 мин.</Text>
            </HStack>
            <HStack {...sessionLineStackStyles}>
              <Text>Сессия истекает:</Text>
              <Text {...sessionInfoValueStyles}>14.12.2020, 20:24</Text>
            </HStack>
          </VStack>
        </WhiteContainer>
        <Image {...cyberpunkImgStyles} />
      </VStack>
    </VStack>
  )
}
