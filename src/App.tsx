import "./styles/global.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/Footer";
import SingleRecipe from "./pages/SingleRecipe";
import Loader from "./components/loader/Loader";
import useRecipes from "./hooks/useRecipes";
import Navbar from "./components/navbar/Navbar";

const AppRouter: React.FC = () => {
  const { loading } = useRecipes();
  return (
    <>
      {loading && <Loader />}
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-[1_0_auto]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:id" element={<SingleRecipe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
