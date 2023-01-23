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
} from '@chakra-ui/react'
import PlayerView from './player-view'
import { usePlayer } from '../../context/player-context'
import { useBrawl } from '../../context/brawl-context'
import { useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  const [playerId, setPlayerId] = useState('')

  const [icon, setIcon] = useState('')
  const [loading, setLoading] = useState(false)

  const { icons, brawlers } = useBrawl()
  const { player, updatePlayer } = usePlayer()

  useEffect(() => {
    if (player && player.icon) {
      updatePlayerIcon()
    }
  }, [player])

  const resetPlayer = () => {
    updatePlayer({})
  }

  const getPlayer = async (id) => {
    resetPlayer()
    setLoading(true)
    const url = `https://localhost:7031/Player/${id}`
    const res = await fetch(url)
    const json = await res.json()
    updatePlayer(json)
    setLoading(false)
  }

  const updatePlayerIcon = () => {
    setIcon(icons.player[player.icon.id].imageUrl)
  }

  return (
    <Container py={10} maxW={'container.md'} centerContent>
      <VStack w={'container.md'} spacing={5}>
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
        {Object.keys(player).length !== 0 && (
          <PlayerView player={player} iconUrl={icon} />
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
