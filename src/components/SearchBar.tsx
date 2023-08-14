import { ChangeEvent, useRef } from "react";

export const SearchBar = () => {
  const debouncedRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debouncedRef.current) {
      clearTimeout(debouncedRef.current);
    }

    debouncedRef.current = setTimeout(() => {
      // TODO: fetch
      console.log(event.target.value);
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
    </div>
  );
};
