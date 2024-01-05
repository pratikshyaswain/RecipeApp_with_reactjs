import React from "react";
import Home from "./components/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  routes,
  route,
  Routes,
  Route,
} from "react-router-dom";
import Recipe from "./components/Recipe";
import RecipeNav from "./components/RecipeNav";
import Search from "./components/Search";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:idMeal" element={<Recipe></Recipe>}></Route>
          <Route path="/RecipeNav" element={<RecipeNav></RecipeNav>}></Route>
          <Route path="/Search/:searchName" element={<Search></Search>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
