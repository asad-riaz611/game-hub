import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/react.svg";
import { ColorModeButton, useColorMode } from "../ui/color-mode";
import { useState } from "react";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <div>
      <HStack justify={"space-between"}>
        <Image src={logo}></Image>
        <HStack>
          <Text fontWeight={"bold"} color={colorMode === 'dark'? 'yellow': 'black'}>
            {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
          </Text>
          <ColorModeButton  color={colorMode === 'dark'? 'yellow': 'black'} />
        </HStack>
      </HStack>
    </div>
  );
};

export default Navbar;
