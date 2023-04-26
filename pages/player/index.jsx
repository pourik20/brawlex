import { useEffect, useState } from 'react'
import {
  Spinner,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Container,
  Flex,
  VStack,
  Text,
} from '@chakra-ui/react'
import PlayerView from '../../components/player-view'
import { usePlayer } from '../../context/player-context'
import { useBrawl } from '../../context/brawl-context'
import { useColorModeValue } from '@chakra-ui/react'
import BrawlerList from '../../components/brawler-list'
import ChromaticText from '../../components/text-gradient'
import testPlayer from '../../public/test_data/test-player.json'

const Page = () => {
  const [playerId, setPlayerId] = useState('')

  const [icon, setIcon] = useState('')
  // const [icon, setIcon] = useState(
  //   'https://cdn-old.brawlify.com/profile/28000151.png'
  // )
  const [loading, setLoading] = useState(false)

  const { icons, brawlers } = useBrawl()
  const { player, updatePlayer } = usePlayer()

  useEffect(() => {
    if (player && player.icon) {
      updatePlayerIcon()
    }
  }, [player])

  // Just for a demo, delete when API is working
  useEffect(() => {
    updatePlayer(testPlayer)
  }, [])

  const resetPlayer = () => {
    updatePlayer({})
  }

  const getPlayer = async (id) => {
    resetPlayer()
    setLoading(true)
    // const url = `https://cr.is-a.dev/${id}`
    // const res = await fetch(url)
    // const json = await res.json()
    // updatePlayer(json)
    updatePlayer(testPlayer)
    setLoading(false)
  }

  const updatePlayerIcon = () => {
    setIcon(icons.player[player.icon.id].imageUrl)
  }

  return (
    <Container py={10} centerContent>
      <VStack
        w={{
          md: 'container.md',
          lg: 'container.lg',
          xl: 'container.xl',
        }}
        spacing={5}
      >
        <ChromaticText>
          There is currently a problem with the API. Displaying a sample user.
        </ChromaticText>
        <Flex gap={2} alignItems='center'>
          <InputGroup maxW={'xs'}>
            <InputLeftElement
              pointerEvents='none'
              color={useColorModeValue('gray.500', 'gray.300')}
              fontSize='1.2em'
              // eslint-disable-next-line react/no-children-prop
              children='#'
            />
            <Input
              placeholder='GAMERTAG'
              color={useColorModeValue('gray.700', 'gray.200')}
              onChange={(e) => setPlayerId(e.target.value)}
              onKeyDown={(e) => {
                if (e.code === 'Enter') getPlayer(playerId)
              }}
              value={playerId.toUpperCase()}
            />
          </InputGroup>
          <Button
            color='white'
            bg='teal.500'
            onClick={() => getPlayer(playerId)}
            _hover={{
              bg: 'teal.600',
            }}
            _focus={{
              outlineColor: 'gray.400',
            }}
          >
            Find
          </Button>
        </Flex>
        {Object.keys(player).length === 0 && (
          <Text fontSize={'lg'}>
            Don&apos;t have a tag? Try &quot;LLUVCYPLR&quot; to see how it
            works.
          </Text>
        )}
        {Object.keys(player).length !== 0 && (
          <>
            <PlayerView player={player} iconUrl={icon} />
            <BrawlerList />
          </>
        )}
        {loading && (
          <Spinner
            thickness='4px'
            speed='0.85s'
            emptyColor='gray.200'
            color='teal.500'
            size='xl'
          />
        )}
      </VStack>
    </Container>
  )
}

export default Page
