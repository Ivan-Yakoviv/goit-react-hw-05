import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import s from "./App.module.css";
// import Home from "../pages/Home/Home";
// import Movies from "../pages/Movies/Movies";
// import NotFound from "../pages/NotFound";
// import MovieDetails from "../pages/MovieDetails/MovieDetails";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";
import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const NotFound = lazy(() => import("../pages/NotFound"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));

const App = () => {
  return (
    <div className={s.container}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
