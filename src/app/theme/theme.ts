import { extendTheme } from '@chakra-ui/react'
import { config } from './config'
import { StylesType, ThemeType } from '@/types'
import { colors } from './colors'
import { components } from './components'

import '@fontsource/lato'
import '@fontsource/lato/300.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/900.css'

const styles: StylesType = {
  global: {
    '#root': {
      minH: '100vh',
    },
    '*': { fontFamily: '"Lato", system-ui' },
    body: {
      fontFamily: '"Lato", system-ui',
      minH: '100vh',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
}

const fonts = {
  body: '"Lato", system-ui',
  heading: '"Lato", system-ui',
}

export const theme = extendTheme({
  components,
  config,
  styles,
  colors,
  fonts,
}) as ThemeType
