import { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import { usePlayer } from '../context/player-context'
import BrawlerCard from './brawler-card'

const BrawlerList = () => {
  const { player } = usePlayer()
  const sortedBrawlers = player.brawlers.sort((a, b) => b.rank - a.rank)
  return (
    <VStack w='100%' spacing={4}>
      {sortedBrawlers.map((b) => (
        <BrawlerCard key={b.name} brawler={b} />
      ))}
    </VStack>
  )
}

export default BrawlerList
