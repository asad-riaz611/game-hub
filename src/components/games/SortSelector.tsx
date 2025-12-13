import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSortSelector: (sort: string) => void;
  sortSelecter: string;
}

const SortSelector = ({ onSortSelector, sortSelecter }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrder.find(
    (order) => order.value === sortSelecter
  );
  return (
    <div>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm" padding={"20px"}>
            Order by: {currentSortOrder?.label || "Relevance"}
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortOrder.map((order) => (
                <Menu.Item
                  onClick={() => onSortSelector(order.value)}
                  key={order.value}
                  value={order.value}
                >
                  {order.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};

export default SortSelector;
