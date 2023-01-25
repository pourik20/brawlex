import { useState } from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { usePlayer } from "../context/player-context";
import BrawlerCard from "./brawler-card";

const BrawlerList = () => {
  const { player } = usePlayer();
  const sortedBrawlers = player.brawlers.sort((a, b) => b.rank - a.rank);
  return (
    <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} spacing={6}>
      {sortedBrawlers.map((b) => (
        <BrawlerCard key={b.name} brawler={b} />
      ))}
    </SimpleGrid>
  );
};

export default BrawlerList;
