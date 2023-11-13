import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Divide } from "hamburger-react";
import { useContext, useState } from "react";
// import { SearchContext } from "../context/SearchProvider";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  // const { setSearchText, searchText } = useContext(SearchContext);
  const navigate = useNavigate();
  // handle to search

  const handleSearch = (value) => {
    if (!value) {
      return;
    }
    if (!(location.pathname === "search")) {
      navigate("/search-result");
    }
    if (value.length > 0) {
      navigate(`/search-result?query=${encodeURIComponent(value)}`);
    }
  };
  return (
    <div className="h-20 flex items-center w-full z-50 shadow-md">
      <nav className="flex my-container justify-between item-center">
        <div className="flex items-center w-full">
          <Link
            className="text-xl md:text-3xl font-bold justify-center flex items-center"
            to="/"
          >
            <span>
              <img src={logo} alt="logo" className="h-8 md:h-10 w-full" />
            </span>
            Compass
          </Link>
        </div>

        <div className="hidden md:block w-full text-center">
          <input
            type="text"
            className="py-3 px-8 outline-none max-w-2xl w-full mx-auto  rounded-full border-gray-200 bg-white border"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search country"
          />
        </div>
        {/* toggle */}
        <div className="md:hidden">
          <Divide toggled={isOpen} toggle={setOpen} />
        </div>
        <ul
          className={`flex gap-6 w-full z-40 bg-white md:bg-transparent left-0 right-0 items-center absolute flex-col md:flex-row h-screen md:h-auto justify-center md:justify-end md:static md:top-0 ${
            isOpen ? "top-20 duration-100" : "-top-full duration-75"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/populars"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Populars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
