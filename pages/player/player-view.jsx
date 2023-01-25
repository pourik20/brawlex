import React from "react";
import { Image, useColorModeValue } from "@chakra-ui/react";
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
} from "@chakra-ui/react";
import { useBrawl } from "../../context/brawl-context";
import PlayerStatsTable from "../../components/player-stats-table";
import { usePlayer } from "../../context/player-context";

const PlayerView = ({ iconUrl }) => {
  const { player } = usePlayer();
  console.log("icon: ", iconUrl);
  return (
    <>
      <Card
        w={{ base: "md", lg: "2xl", xl: "container.lg" }}
        size="lg"
        bg={useColorModeValue("gray.50", "gray.700")}
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              {/* {!iconUrl && (
                <Spinner
                  thickness="4px"
                  speed="0.85s"
                  emptyColor="gray.200"
                  color="teal.500"
                  size="xl"
                />
              )} */}
              <Avatar
                size="xl"
                name={player.name}
                src={iconUrl}
                bg={useColorModeValue("gray.300", "gray.600")}
              />
              <Box>
                <h3 className="text-2xl">
                  <span style={{ color: `#${player.nameColor.substring(4)}` }}>
                    {player.name}
                  </span>
                </h3>
                <Text
                  fontSize="md"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  {player.tag.toUpperCase()}
                </Text>
                <Flex alignItems="center" gap={2}>
                  <Image src="/club.webp" width={5} alt="club" />
                  <Text fontSize={"xl"}>{player.club.name}</Text>
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
  );
};

export default PlayerView;
