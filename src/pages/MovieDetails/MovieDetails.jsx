import { Suspense, useRef, useState, useEffect } from "react";
import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
import { fetchDetails } from "../../api";
import s from "./MovieDetails.module.css";
import clsx from "clsx";
import picDef from "../../assets/grey.jpg";
import Loader from "../../components/Loader/Loader.jsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const startLinkPic = "https://image.tmdb.org/t/p/w500/";

const MovieDetails = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const id = params.movieId;
  const location = useLocation();
  const goBackRef = useRef(location?.state ?? "/movies");
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchDetails({ id });
        setItem(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [id]);

  if (item.length < 1 && isLoading) {
    return <Loader />;
  }
  const { title, poster_path, release_date, overview, vote_average, genres } =
    item;
  return (
    <div>
      <NavLink to={goBackRef.current}>Go back</NavLink>
      <div className={s.imgBox}>
        <img
          className={s.img}
          src={poster_path ? `${startLinkPic}${poster_path}` : picDef}
          alt={title}
        />
        <div>
          <h2>
            {title}({release_date?.slice(0, 4)})
          </h2>
          <p>
            Users average:
            <i>
              {vote_average
                ? ` ${(vote_average * 10).toFixed(2)}%`
                : "Not specified."}
            </i>
          </p>
          <h3>Overview:</h3>
          <p>{overview ? ` ${overview}` : "Not specified."}</p>
          <h3>Genres:</h3>
          <p>
            {genres?.map((genre) => {
              return (
                <span key={genre.id}>
                  {genre.name}
                  {"  "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
      <div>
        <h2>Addition information:</h2>
        <ul>
          <li>
            <NavLink to="credits" className={buildLinkClass} state={location}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={buildLinkClass} state={location}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
