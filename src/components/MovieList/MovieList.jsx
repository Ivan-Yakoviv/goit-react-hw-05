import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {items.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id?.toString()}}`} state={location}>
                <p>{title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
