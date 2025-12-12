import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";
import { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import Skeleton from "./Skeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../genres/GenreList";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const fetchGames = (genreId: number | null, platformId: number | null) =>
  apiClient
    .get<FetchGamesResponse>("/games", {
      params: {
        genres: genreId || undefined,
        parent_platforms: platformId || undefined,
      },
    })
    .then((res) => res.data.results);
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  const {
    data: games,
    error,
    isLoading,
  } = useQuery<Game[], Error>({
    queryKey: ["games", selectedGenre?.id, selectedPlatform?.id],
    queryFn: () =>
      fetchGames(selectedGenre?.id || null, selectedPlatform?.id || null),
  });

  if (error) return <p className="danger">{error.message}</p>;
  return (
    <SimpleGrid padding={10} columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <Skeleton />
          </GameCardContainer>
        ))}
      {games?.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
