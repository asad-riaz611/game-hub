import { Heading } from "@chakra-ui/react";
import React from "react";
import { Platform } from "../games/GameGrid";
import { Genre } from "../genres/GenreList";
interface Props {
  platform?: string;
  genre?: string;
}
const GameHeading = ({ platform, genre }: Props) => {
  const heading = `${platform ?? ""} ${genre ?? ""} Games`;
  return <Heading paddingLeft={5} fontSize={50} as={"h1"} marginY={5} marginBottom={7}>{heading}</Heading>;
};

export default GameHeading;
