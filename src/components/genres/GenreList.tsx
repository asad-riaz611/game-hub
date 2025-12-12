import { useQuery } from "@tanstack/react-query";
import React from "react";
import apiClient from "../../services/api-client";
import {
  Button,
  HStack,
  Image,
  Link,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";
import croppedImageUrl from "../../services/image-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
export interface Genre {
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
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const {
    data: genres,
    error,
    isLoading,
  } = useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });
  if (error) return null;
  if (isLoading) return <Spinner size={"lg"} />;

  return (
    <List.Root listStyle={"none"}>
      {genres?.map((genre) => (
        <List.Item key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize={"40px"}
              borderRadius={8}
              src={croppedImageUrl(genre.image_background)}
            />
            <Link
              color={selectedGenre?.id === genre.id ? "yellow" : ""}
              onClick={() => onSelectGenre(genre)}
              textDecoration={"none"}
              fontWeight={"bold"}
              fontSize={20}
            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
