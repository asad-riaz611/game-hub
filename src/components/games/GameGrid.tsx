import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";
import { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
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
  const { data: games, error } = useQuery<Game[], Error>({
    queryKey: ["games"],
    queryFn: fetchGames,
  });
  if (error) return <p className="danger">{error.message}</p>;
  return (
    <SimpleGrid padding={10} columns={{ sm: 1, md: 2, lg: 3 }} gap={10}>
      {games?.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
