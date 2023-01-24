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

const PlayerView = ({ iconUrl }) => {
  const { player } = usePlayer()
  return (
    <>
      <Card w='100%' maxW='lg' size='lg'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar size='lg' name='avatar' src={iconUrl} />
              <Box>
                <h3 className='text-lg'>
                  <span style={{ color: `#${player.nameColor.substring(4)}` }}>
                    {player.name}
                  </span>
                </h3>
                <Text
                  fontSize='sm'
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  {player.tag.toUpperCase()}
                </Text>
                <Flex alignItems='center' gap={2}>
                  <Image src='/club.webp' width={5} alt='club' />
                  <Text>{player.club.name}</Text>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <PlayerStatsTable />
        </CardBody>
      </Card>
    </>
  )
}

export default PlayerView
