import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CountryCard from "../../components/CountryCard";
import Spinner from "../../components/Spinner";
import "../../Styles/tabsStyle.css";

const panelItems = [
  { title: "All" },
  { title: "Africa" },
  { title: "Asia" },
  { title: "Europe" },
  { title: "Oceania" },
  { title: "Americas" },
];

const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAll, setIsAll] = useState(false);

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
  }, [isAll]);

  const handleRegion = async (region) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await response.json();
      setCountriesData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 min-h-screen">
      <div className="my-container">
        <h1 className="text-2xl md:text-4xl font-bold mb-16 text-center">
          World Countries Info
        </h1>

        {
          <Tabs>
            <TabList
              className={`mb-12 w-full max-w-lg mx-auto text-lg font-bold`}
            >
              <Tab onClick={() => setIsAll(!isAll)}>All</Tab>
              <Tab onClick={() => handleRegion("africa")}>Africa</Tab>
              <Tab onClick={() => handleRegion("asia")}>Asia</Tab>
              <Tab onClick={() => handleRegion("Europe")}>Europe</Tab>
              <Tab onClick={() => handleRegion("Oceania")}>Oceania</Tab>
              <Tab onClick={() => handleRegion("Americas")}>Americas</Tab>
            </TabList>

            {panelItems.map((item) => (
              <TabPanel key={item}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {countriesData?.length ? (
                    countriesData.map((country, index) => (
                      <CountryCard key={index} country={country} />
                    ))
                  ) : (
                    <Spinner />
                  )}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        }
      </div>
    </div>
  );
};

export default Countries;
