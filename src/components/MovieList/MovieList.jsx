import React from "react";
import css from "./MovieList.module.css";
import { NavLink, useLocation } from "react-router-dom";

const startLinkPic = "https://image.tmdb.org/t/p/w500/";

const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {items.map(({ id, poster_path, title }) => {
          return (
            <li className={css.item} key={id}>
              <NavLink to={`/movies/${id?.toString()}}`} state={location}>
                {/* <img
                  className={css.img}
                  src={poster_path ? `${startLinkPic}${poster_path}` : picDef}
                  alt={title}
                /> */}
                {!poster_path && <p className={css.imgText}>No photo.</p>}
                <p className={css.info}>{title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
