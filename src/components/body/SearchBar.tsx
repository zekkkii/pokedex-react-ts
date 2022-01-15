import { FunctionComponent } from "react";
import { SearchBarProps } from "../../models/InterfaceIndex";

const SearchBar: FunctionComponent<SearchBarProps> = ({
  name,
  id,
  placeHolder,
}) => {
  return (
    <input
      type="search"
      name={name}
      id={id}
      placeholder={placeHolder}
      className="search-bar"
    />
  );
};

export default SearchBar;
