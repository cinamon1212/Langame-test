import { InputsType } from '@/types'
import { Text } from '@chakra-ui/react'
import { invalidMessageStyles } from './styles'

type Props = {
  inputType: InputsType
  isSubmitting?: boolean
  value?: string | number | readonly string[] | undefined
  isSuccess?: boolean
}

export const InvalidInputMessage = ({ inputType, isSubmitting, value, isSuccess }: Props) => {
  let invalidMessage = ''
  const requireMessage = 'Поле не должно быть пустым'

  switch (inputType) {
    case 'fio':
      invalidMessage = requireMessage
      break
    case 'birthday':
      invalidMessage = requireMessage
      break
    case 'doc':
      invalidMessage = requireMessage
      break
    case 'passport':
      invalidMessage = 'Поле должно содержать 10  Символов'
      break
    case 'phone':
      invalidMessage = 'Поле должно содержать 11  Символов'
      break
    case 'firstPassword':
      if (!value) invalidMessage = 'Пароль должен быть не менее 6 символов'
      else invalidMessage = 'Пароли должны совпадать'
      break
    case 'secondPassword':
      if (!value) invalidMessage = 'Пароль должен быть не менее 6 символов'
      else invalidMessage = 'Пароли должны совпадать'
      break
  }

  return (
    <Text
      {...invalidMessageStyles}
      visibility={invalidMessage && isSubmitting && !isSuccess ? 'visible' : 'hidden'}
    >
      {invalidMessage}
    </Text>
  )
}
