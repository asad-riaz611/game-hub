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
    <Card.Root>
      <Image src={croppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
