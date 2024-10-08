import { ChangeEvent, useState } from 'react'
import { Grid, VStack } from '@chakra-ui/react'
import { CustomInput } from '../CustomInput'
import { gridLayoutStyles, registrationInputsStyles } from './styles'
import { InputsType, SuccessInputsType } from '@/types'

type Props = {
  isSubmitting: boolean
  passportValue: string
  fioValue: string
  firstPasswordValue: string
  secondPasswordValue: string
  phoneNumberValue: string
  birthdayValue: string
  docValue: string
  successValues: SuccessInputsType
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, inputName: InputsType) => void
}

export const RegistrationInputs = ({
  isSubmitting,
  birthdayValue,
  docValue,
  fioValue,
  firstPasswordValue,
  phoneNumberValue,
  secondPasswordValue,
  passportValue,
  successValues,
  handleInputChange,
}: Props) => {
  const { birthday, doc, fio, firstPassword, passport, phone, secondPassword } = successValues
  const [showPassword, setPasswordShow] = useState(false)

  const handleClick = () => setPasswordShow((prev) => !prev)

  const passwordInputProps = {
    show: showPassword,
    showHandleClick: handleClick,
    type: showPassword ? 'text' : 'password',
    maxLength: 8,
    isPassword: true,
  }

  return (
    <VStack {...registrationInputsStyles}>
      <CustomInput
        leftIconSrc='icons/user_icon.svg'
        label='ФИО'
        isSubmitting={isSubmitting}
        onChange={(e) => handleInputChange(e, 'fio')}
        value={fioValue}
        isSuccess={fio}
        inputType='fio'
      />
      <Grid {...gridLayoutStyles}>
        <CustomInput
          leftIconSrc='icons/phone_icon.svg'
          label='Номер телефона'
          type='number'
          isSubmitting={isSubmitting}
          onChange={(e) => handleInputChange(e, 'phone')}
          value={phoneNumberValue}
          isSuccess={phone}
          inputType='phone'
        />
        <CustomInput
          leftIconSrc='icons/birthday_icon.svg'
          label='Дата рождения'
          isSubmitting={isSubmitting}
          value={birthdayValue}
          onChange={(e) => handleInputChange(e, 'birthday')}
          isSuccess={birthday}
          inputType='birthday'
        />
        <CustomInput
          leftIconSrc='icons/document_icon.svg'
          label='Документ'
          isSubmitting={isSubmitting}
          value={docValue}
          onChange={(e) => handleInputChange(e, 'doc')}
          isSuccess={doc}
          inputType='doc'
        />
        <CustomInput
          leftIconSrc='icons/passport_icon.svg'
          label='Укажите 10 цифр серия и номер'
          type='number'
          isSubmitting={isSubmitting}
          onChange={(e) => handleInputChange(e, 'passport')}
          value={passportValue}
          isSuccess={passport}
          inputType='passport'
        />
        <CustomInput
          leftIconSrc='icons/password_icon.svg'
          label='Укажите пароль'
          value={firstPasswordValue}
          onChange={(e) => handleInputChange(e, 'firstPassword')}
          isSubmitting={isSubmitting}
          isSuccess={firstPassword}
          inputType='firstPassword'
          {...passwordInputProps}
        />
        <CustomInput
          leftIconSrc='icons/password_icon.svg'
          label='Повторите пароль'
          value={secondPasswordValue}
          onChange={(e) => handleInputChange(e, 'secondPassword')}
          isSubmitting={isSubmitting}
          isSuccess={secondPassword}
          inputType='secondPassword'
          {...passwordInputProps}
        />
      </Grid>
    </VStack>
  )
}
