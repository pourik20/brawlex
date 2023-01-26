import { Container, Heading, Text } from '@chakra-ui/react'
import ChromaticText from '../components/text-gradient'

const Home = () => {
  return (
    <>
      <Container mt={4} centerContent>
        <Heading>Welcome to Brawlex</Heading>
        <ChromaticText>Find player section is now fully working!</ChromaticText>
      </Container>
    </>
  )
}

export default Home
