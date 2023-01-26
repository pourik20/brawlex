import React from 'react'
import { Image, useColorModeValue } from '@chakra-ui/react'
import {
  Spinner,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
} from '@chakra-ui/react'
import { useBrawl } from '../../context/brawl-context'
import PlayerStatsTable from '../../components/player-stats-table'
import { usePlayer } from '../../context/player-context'
import TableRow from '../../components/table-row'

const PlayerView = ({ iconUrl }) => {
  const { player } = usePlayer()
  const { brawlers } = useBrawl()

  console.log('player', player)

  return (
    <>
      <Card
        w={{ base: 'sm', lg: 'container.md', xl: 'container.lg' }}
        size='lg'
        bg={useColorModeValue('gray.50', 'gray.700')}
      >
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar
                size='xl'
                name={player.name}
                src={iconUrl}
                bg={useColorModeValue('gray.300', 'gray.600')}
              />
              <Box>
                <h3 className='text-2xl'>
                  <span style={{ color: `#${player.nameColor.substring(4)}` }}>
                    {player.name}
                  </span>
                </h3>
                <Text
                  fontSize='md'
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  {player.tag.toUpperCase()}
                </Text>
                <Flex alignItems='center' gap={2}>
                  <Image src='/club.webp' width={5} alt='club' />
                  <Text fontSize={'xl'}>{player.club.name}</Text>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex
            justifyContent={'center'}
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <PlayerStatsTable title={'Basic stats'}>
              {' '}
              <TableRow
                title='Trophies'
                iconPath='/trophy.webp'
                value={player.trophies}
              />
              <TableRow
                title='Highest Trophies'
                iconPath='/highest-trophies.webp'
                value={player.highestTrophies}
              />
              <TableRow
                title='Level'
                iconPath='/level.webp'
                value={player.expLevel}
              />
              <TableRow
                title='Unlocked Brawlers'
                iconPath='/unlocked.webp'
                value={`${player.brawlers.length}/${brawlers.length}`}
              />
            </PlayerStatsTable>
            <PlayerStatsTable title={'Wins'}>
              {' '}
              <TableRow
                title='3v3 Wins'
                iconPath='/3v3.webp'
                value={player['3vs3Victories']}
              />
              <TableRow
                title='Solo Wins'
                iconPath='/solo.webp'
                value={player.soloVictories}
              />
              <TableRow
                title='Duo Wins'
                iconPath='/duo.webp'
                value={player.duoVictories}
              />
            </PlayerStatsTable>
          </Flex>
        </CardBody>
      </Card>
    </>
  )
}

export default PlayerView
