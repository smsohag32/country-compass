import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await response.json();
        setCountryData(data[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [countryName]);

  if (loading) {
    return;
  }
  const info = Object.values(countryData.currencies);
  console.log(info);

  return (
    <div className="my-container py-16">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4">
            {countryData?.name?.common}
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full">
              <img
                src={countryData?.flags.png}
                alt={countryData?.name.common}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full space-y-2">
              <p>
                <span className="font-bold">Capital:</span>
                {countryData?.capital}
              </p>
              <p>
                <span className="font-bold">Population:</span>
                {countryData?.population}
              </p>
              <p>
                <span className="font-bold">Region:</span> {countryData?.region}
              </p>
              <p>
                <span className="font-bold">Subregion:</span>
                {countryData?.subregion}
              </p>
              <p>
                <span className="font-bold">Languages:</span>
                {Object.values(countryData?.languages).join(", ")}
              </p>
              <p>
                <span className="font-bold">Currencies:</span>
                {Object.values(countryData.currencies)
                  .map((currency) => `${currency.name} (${currency.symbol})`)
                  .join(", ")}
              </p>
              <p>
                <span className="font-bold">Area:</span> {countryData.area} sq
                km
              </p>

              <p>
                <span className="font-bold">Flag:</span>
                <img
                  src={countryData.flags.png}
                  alt={countryData.name.common}
                  className="w-16 h-auto"
                />
              </p>
              {/* Add more details as needed */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDetails;
