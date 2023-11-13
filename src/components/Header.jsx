import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="h-20 flex items-center w-full shadow-md">
      <nav className="flex my-container justify-between item-center">
        <div className="flex items-center">
          <Link
            className="text-xl md:text-2xl font-bold flex items-center"
            to="/"
          >
            <span>
              <img src={logo} alt="logo" className="md:h-10" />
            </span>
            Compass
          </Link>
        </div>
        <ul className={`flex gap-6 items-center`}>
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
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              About
            </NavLink>
          </li>
        </ul>
        <div>
          <input
            type="text"
            className="py-2 px-5 outline-none rounded-3xl border-gray-200 border"
            placeholder="Search country"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
