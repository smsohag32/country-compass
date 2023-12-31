import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div className="w-full flex flex-col  shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-y-105">
      <div className="w-full bg-blue-100">
        <img className="w-full h-48" src={country?.flags?.png} alt="" />
      </div>
      <div className="p-6 flex flex-col">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {country?.name?.common}
        </h4>
        <p>
          Region:
          <span className="text-lg secondary-text">{country?.region}</span>
        </p>
        <p>Capital: {country?.capital}</p>

        <div className="mt-2">
          <p className="text-lg font-semibold">Currencies:</p>
          <ul>
            {country?.currencies &&
              Object.keys(country.currencies).map((currencyCode) => {
                const currency = country.currencies[currencyCode];
                return (
                  <li key={currencyCode}>
                    {currency?.name} ({currency?.symbol})
                  </li>
                );
              })}
          </ul>
        </div>
        <p className="block text-lg mt-3">
          Population:
          <span className="primary-text">{country?.population}</span>
        </p>
      </div>
      <div className="mt-auto p-6 flex justify-end">
        <Link className="primary-btn" to={`/country/${country?.name?.common}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
