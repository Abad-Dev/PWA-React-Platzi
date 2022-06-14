import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Timer from "./pages/Timer";
 import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Recetas</Link>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/recipe/:recipeId" element={<Recipe />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
