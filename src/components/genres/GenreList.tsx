import { useQuery } from "@tanstack/react-query";
import React from "react";
import apiClient from "../../services/api-client";
interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
const fetchGenres = () => {
  return apiClient
    .get<FetchGenreResponse>("/genres")
    .then((res) => res.data.results);
};
const GenreList = () => {
  const {
    data: genres,
    error,
    isLoading,
  } = useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });
  return (
    <ul>
      {genres?.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
