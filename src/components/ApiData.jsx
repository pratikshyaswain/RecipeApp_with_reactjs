import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/recipeee.jpg";
function ApiData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const data = await url.json();
      // console.log(data);
      setData(data.meals);
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="section">
        <div className="body">
          <img className="mainImg" src={img} alt="" />
        </div>
        <div className="content">
          <p>Hello!</p>
          <h4>Welcome</h4>
          <h1>To The Recipe App</h1>
          <div>
            <Link
              to="/RecipeNav"
              className="btn2"
              style={{ textDecoration: "none" }}
            >
              Recipes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default ApiData;
