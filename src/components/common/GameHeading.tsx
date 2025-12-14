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
  return (
    <Heading
      paddingLeft={5}
      pl={5}
      as="h1"
      my={5}
      mb={7}
      fontSize={{
        base: "2xl", // mobile
        sm: "3xl", // small tablets
        md: "4xl", // tablets
        lg: "5xl", // desktop
      }}
      lineHeight="shorter"
      marginY={5}
      marginBottom={7}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
