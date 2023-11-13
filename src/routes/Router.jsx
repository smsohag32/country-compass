import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import PopularCountries from "../pages/Populars/PopularsCountries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/populars",
        element: <PopularCountries />,
      },
    ],
  },
]);

export default router;
