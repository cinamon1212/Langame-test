import { Box, Image, Text, VStack } from '@chakra-ui/react'
import {
  grayLineStyles,
  logoIconStyles,
  logoLabelStyles,
  serviceItemStyles,
  servicesAsideStyles,
  serviceTextStyles,
} from './styles'
import { LogoWithIcon } from '../LogoWithIcon/LogoWithIcon'
import { services } from '@/constants'

export const Services = () => {
  return (
    <VStack {...servicesAsideStyles}>
      <LogoWithIcon
        stackStyles={{ gap: '14.39px', mb: '43px' }}
        iconStyles={logoIconStyles}
        logoStyles={logoLabelStyles}
      />
      <Box {...grayLineStyles} />
      {services.map(({ src, text }) => (
        <>
          <VStack {...serviceItemStyles}>
            <Image src={src} alt={text} />
            <Text {...serviceTextStyles}>{text}</Text>
          </VStack>
          <Box {...grayLineStyles} />
        </>
      ))}
    </VStack>
  )
}
