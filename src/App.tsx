import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/common/Navbar";
import GameGrid, { Platform } from "./components/games/GameGrid";
import GenreList, { Genre } from "./components/genres/GenreList";
import { useState } from "react";
import PlatformMenu from "./components/games/PlatformMenu";
import SortSelector from "./components/games/SortSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [sortSelected, setSortSelected] = useState<string>("");
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"} padding={4} paddingLeft={5} paddingRight={5}>
        <Navbar />
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "block" }}
        area={"aside"}
        paddingX={5}
      >
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area={"main"}>
        <HStack gap={5} paddingLeft={7}>
          <PlatformMenu
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelector
            sortSelecter={sortSelected}
            onSortSelector={(sort) => setSortSelected(sort)}
          />
        </HStack>
        <GameGrid
          selectedSortOrder={sortSelected}
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
