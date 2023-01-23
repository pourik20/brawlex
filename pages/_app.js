import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'
import theme from '../theme'
import '@fontsource/lilita-one'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
