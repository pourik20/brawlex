import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useBrawl } from '../context/brawl-context'
import ChromaticText from './text-gradient'

const BrawlerCard = ({ brawler }) => {
  const { brawlers } = useBrawl()
  console.log(brawlers.length)

  const { rarity } = brawlers.find((x) => x.id === brawler.id)

  const getColoredName = () => {
    const name = rarity.name
    const rarityColorMap = {
      Common: '#8a8a8a',
      Rare: '#00FF00',
      'Super Rare': '#0000CC',
      Epic: '#7F00FF',
      Mythic: '#FF0000',
      Legendary: '#fcd703',
    }
    if (name === 'Chromatic') {
      return <ChromaticText>{brawler.name}</ChromaticText>
    } else {
      return (
        <Text fontSize={'xl'} style={{ color: rarityColorMap[rarity.name] }}>
          {brawler.name}
        </Text>
      )
    }
  }

  const firstLetter = brawler.name.slice(0)[0].toUpperCase()
  let imgName
  switch (brawler.name) {
    case 'EL PRIMO':
      imgName = 'El-Primo'
      break
    case 'MR. P':
      imgName = 'Mr-P'
      break
    case '8-BIT':
      imgName = '8-Bit'
      break
    default:
      imgName = firstLetter + brawler.name.slice(1).toLowerCase()
  }
  return (
    <Card>
      <CardHeader>
        <Flex alignItems={'center'} gap='3'>
          <Image
            src={`https://cdn.brawlify.com/emoji/${imgName}.png?v=1`}
            alt='alt'
            w={'12'}
          />
          {getColoredName()}
          <Text fontSize={'lg'}>{brawler.rank}</Text>
        </Flex>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  )
}

export default BrawlerCard
