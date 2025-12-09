import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/react.svg";
const Navbar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo}></Image>
        <Text>Navbar</Text>
      </HStack>
    </div>
  );
};

export default Navbar;
