import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import SearchProvider from "./context/SearchProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <RouterProvider router={router}></RouterProvider>
  </SearchProvider>
);
