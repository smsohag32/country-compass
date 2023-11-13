import { useEffect, useState } from "react";
import CountryCard from "../../components/CountryCard";
import Spinner from "../../components/Spinner";

const SearchCountries = () => {
  const [populatedCountriesData, setPopulatedCountriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  //   load data
  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        const populated = data.sort((a, b) => b.population - a.population);
        setPopulatedCountriesData(populated);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  //   searching data filter
  const filteredData = populatedCountriesData.filter((country) =>
    country?.name?.common.toLowerCase().includes(searchText.toLocaleLowerCase())
  );
  return (
    <div className="py-24 min-h-screen">
      <div className="my-container">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          World most populated countries
        </h1>
        <div className="text-center mb-12">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className="py-2 px-8 outline-none rounded-3xl border-gray-200 max-w-lg w-full text-lg font-semibold border"
            placeholder="Search country"
          />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredData?.length > 0 &&
              filteredData.map((country, index) => (
                <CountryCard key={index} country={country} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCountries;
