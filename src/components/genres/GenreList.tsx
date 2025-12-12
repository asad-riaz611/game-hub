import { useQuery } from "@tanstack/react-query";
import React from "react";
import apiClient from "../../services/api-client";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import croppedImageUrl from "../../services/image-url";
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
  if (error) return null;
  if (isLoading) return <Spinner size={'lg'}/>
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
              <Text fontWeight={"bold"} fontSize={20}>
                {genre.name}
              </Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    
  );
};

export default GenreList;
