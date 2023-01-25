import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getJSDocAugmentsTag } from "typescript";
import { useBrawl } from "../context/brawl-context";
import ChromaticText from "./text-gradient";

const BrawlerCard = ({ brawler }) => {
  const { brawlers } = useBrawl();

  const { rarity } = brawlers.find((x) => x.id === brawler.id);

  const getColoredName = () => {
    const name = rarity.name;
    const rarityColorMap = {
      Common: "#9ac3fc",
      Rare: "#42ff55",
      "Super Rare": "#388afc",
      Epic: "#a408ff",
      Mythic: "#FF0000",
      Legendary: "#fcd703",
    };
    if (name === "Chromatic") {
      return <ChromaticText>{brawler.name}</ChromaticText>;
    } else {
      return (
        <Text fontSize={"2xl"} style={{ color: rarityColorMap[rarity.name] }}>
          {brawler.name}
        </Text>
      );
    }
  };

  const firstLetter = brawler.name.slice(0)[0].toUpperCase();
  let imgName;
  switch (brawler.name) {
    case "EL PRIMO":
      imgName = "El-Primo";
      break;
    case "MR. P":
      imgName = "Mr-P";
      break;
    case "8-BIT":
      imgName = "8-Bit";
      break;
    default:
      imgName = firstLetter + brawler.name.slice(1).toLowerCase();
  }

  const getGear = () => {
    let unlocked = brawler.gears.map((x) => (
      // <Image
      //   key={x.id}
      //   src={`/gear-${gearMap[x.name]}.webp`}
      //   w={8}
      //   alt="gear"
      // />
      <Image
        key={x.id}
        src={`https://cdn-old.brawlify.com/gears/${x.id}.png`}
        w={8}
        alt="gear"
      />
    ));
    let locked = [];
    for (let i = 0; i < 5 - unlocked.length; i++) {
      locked.push(<Image key={i} src={`/gear-locked.webp`} w={8} alt="gear" />);
    }

    return unlocked.concat(locked);
  };
  //TODO: x.name - pythonem prejmenovat vsechny soubory na upperCase
  const getIcons = (entity, imgPrefix) => {
    let unlocked = brawler[entity].map((x) => (
      <Image
        key={x.id}
        src={`/gd_sp/${brawler.name}/${x.name}.png`}
        w={10}
        alt={`${x.name}`}
      />
    ));
    let locked = [];
    for (let i = 0; i < 2 - unlocked.length; i++) {
      locked.push(
        <Image key={i} src={`/${imgPrefix}-locked.webp`} w={10} alt="gadget" />
      );
    }
    return unlocked.concat(locked);
  };

  return (
    <Card
      w={{ base: "md", lg: "xs" }}
      bg={useColorModeValue("gray.50", "gray.700")}
    >
      <CardHeader>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex alignItems={"center"} gap="3">
            <Image
              src={`https://cdn.brawlify.com/emoji/${imgName}.png?v=1`}
              alt="alt"
              w={"12"}
            />
            {getColoredName()}
          </Flex>
          <Image
            src={`https://cdn-old.brawlify.com/rank/${brawler.rank}.png`}
            alt="rank"
            w={10}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} mb={5}>
          <Flex justifyContent={"center"} gap={5} alignItems={"center"}>
            <Flex gap={1}>{getIcons("gadgets", "gd")}</Flex>
            <Flex gap={1}>{getIcons("starPowers", "sp")}</Flex>
          </Flex>
          <Flex justifyContent={"center"} gap={2}>
            {getGear()}
          </Flex>
        </VStack>
        <Flex alignItems={"center"} justifyContent={"space-between"} px={2}>
          <Flex gap={2}>
            <Image src="/trophy.webp" w={5} alt="trophy" />
            <Text fontSize={"lg"}>
              {brawler.trophies}/{brawler.highestTrophies}
            </Text>
          </Flex>
          <Text fontSize={"xl"}>Some text</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BrawlerCard;
