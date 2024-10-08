import { AuthLayout, RegistrationForm } from '@/components'
import { Button, Heading, HStack, Img, VStack } from '@chakra-ui/react'
import {
  buttonStyles,
  buttonWrapper,
  goOnLoginPage,
  infoIconStyles,
  registrationHeading,
  registrationSection,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { loginPagePath } from '@/constants'
import { ArrowIcon } from '@/icons'

export const RegistrationPage = () => {
  const navigate = useNavigate()

  const handleGoOnLoginPageClick = () => {
    navigate(loginPagePath)
  }

  return (
    <AuthLayout mt='44px'>
      <VStack {...registrationSection}>
        <Heading {...registrationHeading}>Регистрация</Heading>
        <HStack {...buttonWrapper}>
          <Button {...buttonStyles} variant={'red'} position={'relative'}>
            полная
            <Img {...infoIconStyles} />
          </Button>
          <Button {...buttonStyles} bgColor={'inputBgColor'} color={'rgba(120, 120, 120, 1)'}>
            Упрощенная
          </Button>
        </HStack>
        <RegistrationForm />
        <Button {...goOnLoginPage} onClick={handleGoOnLoginPageClick}>
          <ArrowIcon />
          вернутся на главную
        </Button>
      </VStack>
    </AuthLayout>
  )
}
