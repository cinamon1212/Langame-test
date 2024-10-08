import { LogoIcon, LogoLabel } from '@/icons'
import { IconProps, StackProps, VStack } from '@chakra-ui/react'

type Props = {
  stackStyles: StackProps
  iconStyles: IconProps
  logoStyles: IconProps
}

export const LogoWithIcon = ({ stackStyles, iconStyles, logoStyles }: Props) => {
  return (
    <VStack {...stackStyles}>
      <LogoIcon {...iconStyles} />
      <LogoLabel {...logoStyles} />
    </VStack>
  )
}
