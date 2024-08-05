import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import NotFound from "../pages/NotFound";
import css from "./App.module.css";
import ProductDetails from "../pages/MovieDetails";
import AppBar from "./AppBar/AppBar";

const App = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Movies />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
