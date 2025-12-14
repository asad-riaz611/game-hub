import {
  Button,
  Menu,
  Portal,
  MenuPositioner,
  MenuItem,
  MenuContent,
  MenuTrigger,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { BsChevronDown } from "react-icons/bs";
import apiClient from "../../services/api-client";
import { Platform } from "./GameGrid";
interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}
interface FetchPlatform {
  count: number;
  results: Platform[];
}
const fetchPlatforms = () => {
  return apiClient
    .get<FetchPlatform>("/platforms/lists/parents")
    .then((res) => res.data.results);
};
const PlatformMenu = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const {
    data: platforms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
  });
  return (
    <div>
      <Menu.Root>
        <MenuTrigger asChild>
          <Button style={{border: 'solid' }} variant="outline" size="sm" padding={"20px"}>
            {selectedPlatform ? selectedPlatform.name : "Platforms"}
          </Button>
        </MenuTrigger>
        <Portal>
          <MenuPositioner>
            <MenuContent>
              {platforms?.map((platform) => (
                <MenuItem
                  onClick={() => onSelectPlatform(platform)}
                  value={platform.name}
                  key={platform.id}
                >
                  {platform.name}
                </MenuItem>
              ))}
            </MenuContent>
          </MenuPositioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};

export default PlatformMenu;
