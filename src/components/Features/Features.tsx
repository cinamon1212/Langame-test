import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import { featureItemStyles, featuresArticle, featureTextStyles } from './styles'
import { features } from '@/constants'

export const Features = () => {
  return (
    <HStack {...featuresArticle}>
      {features.map(({ bgColor, src, text }) => (
        <VStack bgColor={bgColor} {...featureItemStyles}>
          <Image src={src} alt={text} />
          <Text {...featureTextStyles}>{text}</Text>
        </VStack>
      ))}
    </HStack>
  )
}
