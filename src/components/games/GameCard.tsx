import React from "react";
import { Game } from "./GameGrid";
import {
  Card,
  CardBody,
  CardRoot,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import croppedImageUrl from "../../services/image-url";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <CardRoot
      borderRadius={10}
      overflow={"hidden"}
      width={{ sm: "250px", lg: "350px" }}
    >
      <Image src={croppedImageUrl(game.background_image)} />
      <CardBody>
        <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
