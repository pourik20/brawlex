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

const PlayerStatsTable = ({ children, title }) => {
  const { brawlers } = useBrawl()
  const { player } = usePlayer()

  return (
    <TableContainer>
      <Table
        fontSize={'md'}
        variant='simple'
        w={{ base: '320px', lg: '350px' }}
      >
        <Thead>
          <Tr>
            <Th fontSize={{ base: 'lg', md: 'xl' }} textAlign='center'>
              {title}
            </Th>
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  )
}

export default PlayerStatsTable
