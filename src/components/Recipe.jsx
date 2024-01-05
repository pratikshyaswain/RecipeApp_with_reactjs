import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FooterData from "./FooterData";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { idMeal } = useParams();
  const [data, setData] = useState([]);
  const [view, setView] = useState("ingredient");

  useEffect(() => {
    const fetchApi = async () => {
      const url = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );

      const data = await url.json();
      setData(data.meals[0]);
      console.log(data);
    };
    fetchApi();
  }, [idMeal]);
  return (
    <>
      <Navbar></Navbar>

      <div className="parent">
        <div className="main">
          <h1
            style={{
              marginTop: "30px",
            }}
          >
            {data.strMeal}
          </h1>
          <div>
            <div className="image">
              <img
                src={data.strMealThumb}
                style={{
                  border: "4px solid black",
                  borderRadius: "35px",
                }}
              />
            </div>
            <div className="container">
              <button
                className="btn"
                style={{
                  width: "140px",
                  backgroundColor: "#ffa500",
                  fontWeight: "bold",
                }}
                onClick={() => setView("ingredient")}
              >
                Ingredient
              </button>
              <button
                className="btn"
                style={{
                  width: "150px",
                  backgroundColor: "#ffa500",
                  fontWeight: "bold",
                }}
                onClick={() => setView("recipe")}
              >
                View recipe
              </button>
            </div>
          </div>
        </div>
        <div className="main2">
          {view === "recipe" ? (
            <div>
              <h2
                style={{
                  textDecoration: "underline",
                }}
              >
                Recipe
              </h2>
              <p className="p">{data.strInstructions}</p>
            </div>
          ) : (
            <div>
              <h2
                style={{
                  textDecoration: "underline",
                }}
              >
                Ingredient
              </h2>
              <ul>
                <li>
                  <h3 style={{ fontWeight: "bold" }}>
                    {data.strIngredient1}:{data.strMeasure1}
                  </h3>
                </li>
                <li>
                  <h3 style={{ fontWeight: "bold" }}>
                    {data.strIngredient2}:{data.strMeasure2}
                  </h3>
                </li>
                <li>
                  <h3 style={{ fontWeight: "bold" }}>
                    {data.strIngredient3}:{data.strMeasure3}
                  </h3>
                </li>
                <li>
                  <h3 style={{ fontWeight: "bold" }}>
                    {data.strIngredient4}:{data.strMeasure4}
                  </h3>
                </li>
                <li>
                  <h3 style={{ fontWeight: "bold" }}>
                    {data.strIngredient5}:{data.strMeasure5}
                  </h3>
                </li>
                <li>
                  <h3 style={{ fontWeight: "bold" }}>
                    {data.strIngredient6}:{data.strMeasure6}
                  </h3>
                </li>
              </ul>
            </div>
          )}
          /
        </div>
      </div>
      <FooterData></FooterData>
    </>
  );
};

export default Recipe;
