import {
  Image,
  InputGroup,
  InputLeftElement,
  InputProps,
  Input,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  inputGroupStyles,
  inputLeftElementStyles,
  inputRightElemStyles,
  inputStyles,
  labelStyles,
  labelWithInputStack,
  showPasswordButton,
} from './styles'
import { StatusIcon } from '../StatusIcon'
import { InputsType } from '@/types'
import { InvalidInputMessage } from '../InvalidInputMessage'

type Props = {
  leftIconSrc: string
  inputType?: InputsType
  isSuccess?: boolean
  isSubmitting?: boolean
  show?: boolean
  label?: string
  isPassword?: boolean
  showHandleClick?: () => void
} & InputProps

export const CustomInput = ({
  leftIconSrc,
  inputType,
  isPassword,
  show,
  label,
  isSubmitting,
  isSuccess,
  showHandleClick,
  ...props
}: Props) => {
  const { border, outline } = isSuccess
    ? { outline: 'var(--chakra-colors-success-900)', border: 'var(--chakra-colors-success-100)' }
    : { outline: 'var(--chakra-colors-primary-900)', border: 'var(--chakra-colors-primary-100)' }

  return (
    <VStack gap='9px' w={'100%'}>
      <InputGroup
        {...inputGroupStyles}
        border={'2px solid'}
        borderColor={isSubmitting ? border : 'transparent'}
        outline={'6px solid'}
        outlineColor={isSubmitting ? outline : 'transparent'}
      >
        <InputLeftElement {...inputLeftElementStyles}>
          <Image src={leftIconSrc} />
        </InputLeftElement>
        <VStack mt={label ? '20px' : 0} {...labelWithInputStack}>
          {label && (
            <Text {...labelStyles} htmlFor={label}>
              {label}
            </Text>
          )}
          <Input {...inputStyles} {...props} h={label ? '24px' : '100%'} name={label} id={label} />
        </VStack>
        {props.value && isPassword && (
          <InputRightElement {...inputRightElemStyles} pr={isSubmitting ? '41px' : '14px'}>
            <Text onClick={showHandleClick} {...showPasswordButton}>
              {show ? 'Скрыть' : 'Показать'}
            </Text>
          </InputRightElement>
        )}
        {isSubmitting && (
          <StatusIcon
            status={isSuccess ? true : false}
            stackProps={{ w: '16px', h: '16px', position: 'absolute', right: '15px', top: '33px' }}
            iconProps={{ w: '10px', h: '8px' }}
          />
        )}
      </InputGroup>
      {inputType && (
        <InvalidInputMessage
          inputType={inputType}
          isSubmitting={isSubmitting}
          value={props.value}
          isSuccess={isSuccess}
        />
      )}
    </VStack>
  )
}
