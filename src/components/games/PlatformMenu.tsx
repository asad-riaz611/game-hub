import { Button, Menu, Portal } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";
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
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm" padding={"20px"}>
            {selectedPlatform ? selectedPlatform.name : "Platforms"}
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {platforms?.map((platform) => (
                <Menu.Item
                  onClick={() => onSelectPlatform(platform)}
                  value={platform.name}
                  key={platform.id}
                >
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};

export default PlatformMenu;
