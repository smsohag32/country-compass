import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CountryCard from "../../components/CountryCard";

const SearchResult = () => {
  const location = useLocation();
  const searchText = new URLSearchParams(location.search).get("query");

  const [searchResultsData, setSearchResultsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResultsData(data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  //   searching data filter
  const searchResult = searchResultsData.filter((country) =>
    country?.name?.common.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  return (
    <div className="py-16 min-h-screen">
      <div className="my-container">
        <h1 className="text-2xl md:text-4xl font-bold mb-12 text-center">
          Countries found
          <span className="secondary-text ms-3">{searchResult?.length}</span>
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {searchResult?.length > 0 &&
            searchResult.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
