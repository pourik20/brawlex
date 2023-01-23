import React from 'react'
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Flex,
  Text,
  Image,
} from '@chakra-ui/react'
import { usePlayer } from '../context/player-context'
import { useBrawl } from '../context/brawl-context'
import TableRow from './table-row'

const PlayerStatsTable = () => {
  const { brawlers } = useBrawl()
  const { player } = usePlayer()
  console.log('player from table:', player)
  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign='center'>Basic stats</Th>
          </Tr>
        </Thead>
        <Tbody>
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
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default PlayerStatsTable
