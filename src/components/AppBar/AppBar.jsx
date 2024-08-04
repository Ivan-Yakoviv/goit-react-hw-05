import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        <span role="img" aria-label="TV icon">
          💻
        </span>{" "}
        TMDB
      </p>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
