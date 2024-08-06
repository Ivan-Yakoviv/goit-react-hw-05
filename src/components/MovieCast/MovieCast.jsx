import { useState, useEffect } from "react";
import { fetchCredits } from "../../api";
import { useParams } from "react-router-dom";
import picDef from "../../assets/grey.jpg";
import s from "./MovieCast.module.css";
import Loader from "../Loader/Loader";

const startLinkPic = "https://image.tmdb.org/t/p/w500/";

const MovieCast = () => {
  const params = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = params.movieId;
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchCredits({ id });
        setActors(response.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [id]);

  if (actors?.length < 1 && isLoading) {
    return <Loader />;
  }

  return (
    <div className={s.wrap}>
      <h2>Cast #{actors.length}</h2>
      <ul className={s.list}>
        {actors.map(({ id, character, name, profile_path }) => {
          return (
            <li className={s.item} key={id}>
              <div>
                <img
                  className={s.img}
                  src={profile_path ? `${startLinkPic}${profile_path}` : picDef}
                  alt={name}
                />
                {!profile_path && <h6 className={s.noPhoto}>No photo ..</h6>}
                <div>
                  <h4>{name}</h4>
                  <p>{character}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
