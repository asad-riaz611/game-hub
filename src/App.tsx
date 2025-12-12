import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/common/Navbar";
import GameGrid from "./components/games/GameGrid";
import GenreList from "./components/genres/GenreList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area={"nav"} padding={4} paddingLeft={5} paddingRight={5}>
        <Navbar />
      </GridItem>
      <GridItem display={{ base: "none", lg: "block" }} area={"aside"} paddingX={5}>
        <GenreList />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
