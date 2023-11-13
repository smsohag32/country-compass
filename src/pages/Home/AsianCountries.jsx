import React, { useEffect, useState } from "react";

import Spinner from "../../components/Spinner";

const AsianCountries = () => {
  const [asianCountries, setAsianCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/region/asia`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setAsianCountries(data);
      });
  }, []);

  return (
    <section className="py-16">
      <div className="my-container">
        <h2 className="text-3xl font-bold mb-8 text-center">Asian Countries</h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {asianCountries.slice(0, 15).map((country, index) => (
              <div
                key={index}
                className="bg-white hover:border-blue-100 hover:scale-y-105 transition-all duration-300 border border-white py-10 px-6 rounded flex flex-col items-center justify-center shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {country.name.common}
                </h3>
                <p className="text-gray-700">Capital: {country?.capital}</p>
                <p className="text-gray-700">
                  Population: {country?.population}
                </p>
                <div className="text-center mt-4">
                  <img
                    className="rounded-full h-32 w-32 object-cover"
                    src={country?.flags?.png}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AsianCountries;
