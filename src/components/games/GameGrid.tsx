import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";
import { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import Skeleton from "./Skeleton";
import GameCardContainer from "./GameCardContainer";
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
const fetchGames = () =>
  apiClient.get<FetchGamesResponse>("/games").then((res) => res.data.results);
const GameGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  const {
    data: games,
    error,
    isLoading,
  } = useQuery<Game[], Error>({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  if (error) return <p className="danger">{error.message}</p>;
  return (
    <SimpleGrid padding={10} columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
      {isLoading &&
        skeletons.map((s) => (
          <GameCardContainer>
            <Skeleton />
          </GameCardContainer>
        ))}
      {games?.map((game) => (
        <GameCardContainer>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
