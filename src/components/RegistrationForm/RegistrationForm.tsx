import { homePagePath, successInputsInitialValue } from '@/constants'
import { ChangeEvent, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegistrationInputs } from '../RegistrationInputs'
import { RightsCheck } from '../RightsCheck'
import { Button } from '@chakra-ui/react'
import { registrationButton } from './styles'
import { InputsType, SuccessInputsType } from '@/types'

export const RegistrationForm = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(false)

  const [firstPasswordValue, setFirstPasswordValue] = useState('')
  const [secondPasswordValue, setSecondPasswordValue] = useState('')
  const [fioValue, setFioValue] = useState('')
  const [phoneNumberValue, setPhoneNumberValue] = useState('')
  const [birthdayValue, setBirthdayValue] = useState('')
  const [docValue, setDocValue] = useState('')
  const [passportValue, setPassportValue] = useState('')

  const [successValues, setSuccessValues] = useState<SuccessInputsType>(successInputsInitialValue)

  const navigate = useNavigate()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, inputName: InputsType) => {
    const value = e.target.value
    switch (inputName) {
      case 'fio':
        setFioValue(value)
        break
      case 'birthday':
        setBirthdayValue(value)
        break
      case 'doc':
        setDocValue(value)
        break
      case 'passport':
        if (value.length < 11) setPassportValue(value)
        break
      case 'phone':
        if (value.length < 12) setPhoneNumberValue(value)
        break
      case 'firstPassword':
        setFirstPasswordValue(value.toLowerCase())
        break
      case 'secondPassword':
        setSecondPasswordValue(value.toLowerCase())
        break
    }
  }

  const handleStatusChange = () => {
    setStatus((prev) => !prev)
  }

  const onSubmit: FormEventHandler<HTMLFormElement> | undefined = (e) => {
    e.preventDefault()
    setSubmitting(true)
    const newSuccessValues = { ...successInputsInitialValue }

    if (
      firstPasswordValue === secondPasswordValue &&
      firstPasswordValue.length !== 0 &&
      secondPasswordValue.length !== 0
    ) {
      newSuccessValues.firstPassword = true
      newSuccessValues.secondPassword = true
    } else {
      newSuccessValues.firstPassword = false
      newSuccessValues.secondPassword = false
    }

    newSuccessValues.fio = fioValue.length === 0 ? false : true
    newSuccessValues.phone = phoneNumberValue.length === 11 ? true : false
    newSuccessValues.birthday = birthdayValue.length === 0 ? false : true
    newSuccessValues.doc = docValue.length === 0 ? false : true
    newSuccessValues.passport = passportValue.length === 10 ? true : false

    setSuccessValues(newSuccessValues)

    const falsyCounter = Object.values(newSuccessValues).reduce(
      (acc, item) => {
        if (item === false) acc++
        return acc
      },
      status === false ? 1 : 0
    )

    if (!falsyCounter) navigate(homePagePath)

    setTimeout(() => {
      setSubmitting(false)
    }, 5000)
  }

  return (
    <form onSubmit={onSubmit}>
      <RegistrationInputs
        isSubmitting={isSubmitting}
        birthdayValue={birthdayValue}
        docValue={docValue}
        fioValue={fioValue}
        firstPasswordValue={firstPasswordValue}
        phoneNumberValue={phoneNumberValue}
        secondPasswordValue={secondPasswordValue}
        passportValue={passportValue}
        handleInputChange={handleInputChange}
        successValues={successValues}
      />
      <RightsCheck
        isSubmitting={isSubmitting}
        status={status}
        handleStatusChange={handleStatusChange}
      />
      <Button
        {...registrationButton}
        cursor={isSubmitting ? 'not-allowed' : 'pointer'}
        opacity={isSubmitting ? 0.12 : 1}
      >
        Зарегистрироваться
      </Button>
    </form>
  )
}
