import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { usePlayer } from '../context/player-context'
import BrawlerCard from './brawler-card'

const BrawlerList = () => {
  const { player } = usePlayer()
  const sortedBrawlers = player.brawlers.sort((a, b) => b.rank - a.rank)
  return (
    <Flex wrap={'wrap'} gap={4}>
      {sortedBrawlers.map((b) => (
        <BrawlerCard key={b.name} brawler={b} />
      ))}
    </Flex>
  )
}

export default BrawlerList
