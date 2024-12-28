import "./styles/global.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleRecipe from "./pages/SingleRecipe";
import Loader from "./components/Loader";
import { useDispatch } from "react-redux";
import { fetchRecipesData } from "./store/slices/RecipesSlice";

const AppRouter: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.recipes);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchRecipesData());
  }, []);
  return (
    <>
    {loading && <Loader />}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<SingleRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
