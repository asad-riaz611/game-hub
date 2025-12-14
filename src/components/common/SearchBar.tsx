import { Input, InputGroup } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />} paddingX={3}>
        <Input
          ref={ref}
          fontWeight={"bold"}
          borderRadius={15}
          placeholder="Search..."
          variant={"outline"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
