import React from "react";
import { Game } from "./GameGrid";
import ElectricBorder from "./ElectricBorder";
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
    <>
      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
      >
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
      </ElectricBorder>
    </>
  );
};

export default GameCard;
