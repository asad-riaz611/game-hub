import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/common/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} padding={4}>
        <Navbar />
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "block" }}
        area={"aside"}
        bg={"gold"}
      >
        Aside
      </GridItem>
      <GridItem area={"main"} bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
