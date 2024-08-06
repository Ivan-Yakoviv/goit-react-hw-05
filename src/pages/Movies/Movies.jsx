import { useSearchParams } from "react-router-dom";
import { fetchSearch } from "../../api";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

const Movies = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      setIsError(false);
      setIsLoading(false);
      return;
    }

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchSearch({ query });
        setItems(response.results);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  const onHandleSubmit = (value) => {
    if (!value) {
      return setSearchParams({});
    }
    searchParams.set("query", value);
    setSearchParams(searchParams);
    setIsError(false);
  };

  return (
    <div>
      <SearchBar onHandleSubmit={onHandleSubmit} />
      {isLoading && <Loader />}
      {isError && <p>Error fetching data... try again...</p>}
      {query?.length !== 0 && items?.length === 0 && (
        <p>No data available...</p>
      )}
      {items?.length !== 0 && <MovieList items={items} />}
    </div>
  );
};

export default Movies;
