import { ChangeEvent, useRef, useContext } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const debouncedRef = useRef<NodeJS.Timeout>();
  const {searchPlacesByTerm} = useContext(PlacesContext)

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debouncedRef.current) {
      clearTimeout(debouncedRef.current);
    }

    debouncedRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value)
    }, 1000);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Search place"
        onChange={onQueryChanged}
      />
      <SearchResults />

    </div>
  );
};
