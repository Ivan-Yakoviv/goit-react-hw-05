import { useState, useEffect } from "react";
import { fetchReviews } from "../../api.js";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = params.movieId;
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchReviews({ id });
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [id]);

  if (reviews.length < 1 && isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h2>Reviews #{reviews.length}</h2>
      <ul>
        {reviews.map(({ id, url, author, content }) => {
          return (
            <li key={id}>
              <div>
                <div>
                  <h3>{author}</h3>
                  <p>{content}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    GO current link
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;
