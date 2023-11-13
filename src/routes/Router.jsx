import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import PopularCountries from "../pages/Populars/PopularsCountries";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SearchResult from "../pages/SearchResult/SearchResult";
import CountryDetails from "../pages/CountryDetails/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/populars",
        element: <PopularCountries />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/search-result",
        element: <SearchResult />,
      },
      {
        path: "/country/:countryName",
        element: <CountryDetails />,
      },
    ],
  },
]);

export default router;
