import { CheckIcon, CloseIcon } from '@/icons'
import { HStack, IconProps, StackProps } from '@chakra-ui/react'
import { iconStackStyles } from './styles'

type Props = {
  stackProps: StackProps
  iconProps: IconProps
  status: boolean
}

export const StatusIcon = ({ stackProps, iconProps, status }: Props) => {
  return (
    <HStack bgColor={status ? 'success.100' : 'primary.100'} {...iconStackStyles} {...stackProps}>
      {status ? <CheckIcon {...iconProps} /> : <CloseIcon {...iconProps} />}
    </HStack>
  )
}
