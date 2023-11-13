import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import CountryCard from "../../components/CountryCard";
import Spinner from "../../components/Spinner";

const PopularCountries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAll, setIsAll] = useState(false);
  //   tabs

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-24 min-h-screen">
      <div className="my-container">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          World most populated countries
        </h1>
        <div className="text-center mb-12">
          <input
            type="text"
            className="py-2 px-8 outline-none rounded-3xl border-gray-200 max-w-lg w-full text-lg font-semibold border"
            placeholder="Search country"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countriesData?.length ? (
            countriesData.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularCountries;
