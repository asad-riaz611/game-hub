import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/react.svg";
import { ColorModeButton, useColorMode } from "../ui/color-mode";
import { useState } from "react";
import SearchBar from "./SearchBar";
interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  const [darkMode, setDarkMode] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <div>
      <HStack>
        <Image src={logo}></Image>
        <SearchBar onSearch={onSearch} />
        <HStack>
          <Text
            textWrap={"nowrap"}
            fontWeight={"bold"}
            color={colorMode === "dark" ? "yellow" : "black"}
          >
            {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
          </Text>
          <ColorModeButton color={colorMode === "dark" ? "yellow" : "black"} />
        </HStack>
      </HStack>
    </div>
  );
};

export default Navbar;
