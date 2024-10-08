import {
  enterButtonStyles,
  forgetTextStyles,
  inputWrapper,
  loginForm,
  logoIconStyles,
  logoLabelStyles,
} from './styles'
import { LogoWithIcon } from '../LogoWithIcon/LogoWithIcon'
import { Button, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { CustomInput } from '../CustomInput'
import { useNavigate } from 'react-router-dom'
import { homePagePath } from '@/constants'

export const LoginForm = () => {
  const [telInputValue, setTelInputValue] = useState('')
  const [passwordInputValue, setPasswordInputValue] = useState('')

  const navigate = useNavigate()

  const [show, setShow] = useState(false)

  const handleClick = () => setShow((prev) => !prev)

  const handleTelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 12) setTelInputValue(e.target.value)
  }
  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(e.target.value)
    if (e.target.value === '') setShow(false)
  }

  const isRedButtonDisabled = telInputValue && passwordInputValue ? false : true

  const handleEnterButtonClick = () => {
    if (!isRedButtonDisabled) navigate(homePagePath)
  }

  return (
    <VStack {...loginForm}>
      <LogoWithIcon
        stackStyles={{ gap: '17px' }}
        iconStyles={logoIconStyles}
        logoStyles={logoLabelStyles}
      />
      <VStack {...inputWrapper}>
        <CustomInput
          leftIconSrc='icons/phone_icon.svg'
          placeholder='Введите номер телефона'
          value={telInputValue}
          onChange={handleTelInputChange}
          type='number'
        />
        <CustomInput
          leftIconSrc='/icons/password_icon.svg'
          placeholder='Введите пароль'
          value={passwordInputValue}
          onChange={handlePasswordInputChange}
          show={show}
          type={show ? 'text' : 'password'}
          showHandleClick={handleClick}
          maxLength={8}
          isPassword
        />
      </VStack>
      <Text {...forgetTextStyles}>Забыли пароль?</Text>
      <Button
        cursor={isRedButtonDisabled ? 'not-allowed' : 'pointer'}
        opacity={isRedButtonDisabled ? 0.12 : 1}
        onClick={handleEnterButtonClick}
        {...enterButtonStyles}
      >
        Войти
      </Button>
    </VStack>
  )
}
