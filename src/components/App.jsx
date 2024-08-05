import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import NotFound from "../pages/NotFound";
import css from "./App.module.css";
import AppBar from "./AppBar/AppBar";
import MovieDetails from "../pages/MovieDetails";

const App = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
