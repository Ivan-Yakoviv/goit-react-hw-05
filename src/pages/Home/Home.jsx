import { useState, useEffect } from "react";
import { fetchTrending } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader.jsx";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchTrending();
        setItems((pref) => [...pref, ...response.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (items.length < 1 || isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h2>Trending today</h2>
      {items.length > 0 ? <MovieList items={items} /> : <Loader />}
    </div>
  );
};

export default Home;
