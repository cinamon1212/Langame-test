import { AuthLayout, LoginForm } from '@/components'
import { HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import { dontHaveAccTextStyles, registrationLinkStyles } from './styles'

export const LoginPage = () => {
  return (
    <AuthLayout mt='90px'>
      <LoginForm />
      <VStack mt={'67px'} gap={'7px'}>
        <Text {...dontHaveAccTextStyles}>Если у вас еще нет аккаунта?</Text>
        <Link {...registrationLinkStyles}>Зарегистрируйтесь</Link>
      </VStack>
      <VStack gap={'24px'} mt={'83px'}>
        <Text>Установите приложение.</Text>
        <HStack gap={'21px'}>
          <Image src='buttons/google_play.svg' cursor={'pointer'} />
          <Image src='buttons/app_store.svg' cursor={'pointer'} />
        </HStack>
      </VStack>
    </AuthLayout>
  )
}
