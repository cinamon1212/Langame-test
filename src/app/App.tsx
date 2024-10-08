import { ChakraUIProvider } from './providers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage, HomePage, RegistrationPage } from '@/pages'
import { homePagePath, loginPagePath, registrationPagePath } from '@/constants'

export const App = () => {
  return (
    <ChakraUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'*'} element={<LoginPage />} />
          <Route path={loginPagePath} element={<LoginPage />} />
          <Route path={homePagePath} element={<HomePage />} />
          <Route path={registrationPagePath} element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraUIProvider>
  )
}
