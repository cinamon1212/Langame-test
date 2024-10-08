import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { StatusIcon } from '../StatusIcon'
import {
  rightsStackStyles,
  statusIconStackStyles,
  rightsTextStyles,
  invalidMessageStyles,
} from './style'

type Props = {
  isSubmitting: boolean
  status: boolean
  handleStatusChange: () => void
}

export const RightsCheck = ({ isSubmitting, status, handleStatusChange }: Props) => {
  return (
    <VStack>
      <HStack gap={'12px'} mt={'26px'} alignSelf={'flex-start'}>
        <Box {...rightsStackStyles} onClick={handleStatusChange}>
          <StatusIcon
            status={status}
            stackProps={{
              ...statusIconStackStyles,
              transform: status ? 'translateX(100%)' : 'translateX(0)',
            }}
            iconProps={{ w: '12px', h: '9px' }}
          />
        </Box>
        <Text {...rightsTextStyles}>Я даю свое право на информационную рассылку</Text>
      </HStack>
      <Text {...invalidMessageStyles} visibility={isSubmitting && !status ? 'visible' : 'hidden'}>
        Необходимо подтвердить права
      </Text>
    </VStack>
  )
}
