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
      <div style={{ width: "90%", margin: "auto" }}>
        <h2
          style={{
            marginTop: "30px",
            fontWeight: "bold",
            marginLeft: "40px",
            width: "200px",
          }}
        >
          {data.strMeal}
        </h2>
        <div>
          <div className="image">
            <img
              src={data.strMealThumb}
              style={{
                width: "300px",
                border: "4px solid black",
                margin: "10px",
                marginLeft: "20px",
              }}
            />
            {/* <h2
              style={{
                // marginTop: "30px",
                fontWeight: "bold",
                marginLeft: "49px",
                width: "200px",
              }}
            >
              {data.strCategory}
            </h2> */}
          </div>
          <div className="container">
            <button
              className="btn"
              style={{
                width: "100px",
                backgroundColor: "#f44020",
                fontWeight: "bold",
                marginTop: "20px",
                marginLeft: "0px",
                marginRight: "10px",
              }}
              onClick={() => setView("ingredient")}
            >
              Ingredient
            </button>
            <button
              className="btn"
              style={{
                width: "120px",
                backgroundColor: "#f44020",
                fontWeight: "bold",
                marginTop: "20px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
              onClick={() => setView("recipe")}
            >
              View recipe
            </button>
          </div>
        </div>
      </div>
      {view === "recipe" ? (
        <div
          style={{
            position: "absolute",
            left: "470px",
            top: "100px",
            width: "900px",
            fontWeight: "bold",
            fontSize: "17px",
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
              marginLeft: "300px",
              textDecoration: "underline",
            }}
          >
            Recipe
          </h2>
          <p style={{ marginTop: "0px" }}>{data.strInstructions}</p>
        </div>
      ) : (
        <div style={{ position: "absolute", left: "600px", top: "100px" }}>
          <h2
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              marginLeft: "80px",
            }}
          >
            Ingredient
          </h2>
          <ul style={{ marginTop: "20px" }}>
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

      <FooterData></FooterData>
    </>
  );
};

export default Recipe;
