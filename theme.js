import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: `'Lilita One', sans-serif`,
    body: `'Lilita One', sans-serif`,
  },
})

export default theme
