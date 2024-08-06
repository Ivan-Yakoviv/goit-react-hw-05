import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AppBar = () => {
  return (
    <header className={s.header}>
      <p className={s.logo}>
        <span role="img" aria-label="TV icon">
          💻
        </span>{" "}
        TMDB
      </p>

      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
