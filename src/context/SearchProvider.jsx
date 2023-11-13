import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <SearchContext.Provider
      value={{ searchText, setSearchText, loading, setLoading }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
