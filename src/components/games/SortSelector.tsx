import { Button, Menu, Portal } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
    
  return (
    <div>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm" padding={"20px"}>
            Orderby: Relevance
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="">Relevance</Menu.Item>
              <Menu.Item value="">Date Added</Menu.Item>
              <Menu.Item value="">Name</Menu.Item>
              <Menu.Item value="">Release date</Menu.Item>
              <Menu.Item value="">Popularity</Menu.Item>
              <Menu.Item value="">Average rating</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};

export default SortSelector;
