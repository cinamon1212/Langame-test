import { Icon, IconProps } from '@chakra-ui/react'

export const CheckIcon = ({ w, h }: IconProps) => {
  // width='10' height='8' viewBox='0 0 10 8'

  return (
    <Icon w={w} h={h} viewBox={'0 0 10 8'} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.75294 1.09289C8.63519 0.969035 8.44422 0.969035 8.32644 1.09289L3.43772 6.23429L1.51484 4.21201C1.39708 4.08814 1.20612 4.08814 1.08833 4.21201C0.970557 4.33587 0.970557 4.53669 1.08833 4.66057L3.22449 6.90713C3.34221 7.03094 3.53324 7.03097 3.651 6.90713L8.75294 1.54145C8.87072 1.41757 8.87072 1.21675 8.75294 1.09289Z'
        fill='white'
        stroke='white'
      />
    </Icon>
  )
}
