import { Box, For, HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as={"button"} onClick={toggleColorMode}>
      <Switch.Root >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label></Switch.Label>
      </Switch.Root>
    </Box>
  );
};

export default ColorMode;
