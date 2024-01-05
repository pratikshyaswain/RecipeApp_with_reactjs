import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FooterData from "./FooterData";
import { Link } from "react-router-dom";
const RecipeNav = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s`
      );
      const data = await url.json();
      setData(data.meals);
      // console.log(data);
    };
    fetchApi();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "350px 350px 350px 350px",
          gridGap: "1.5rem",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        {data.map((i) => {
          return (
            <>
              <Link
                to={`/${i.idMeal}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div style={{ textAlign: "center" }}>
                  <div className="image">
                    <img
                      style={{ width: "320px" }}
                      src={i.strMealThumb}
                      alt=""
                    />
                  </div>
                  <h3 style={{ fontWeight: "bold", marginTop: "10px" }}>
                    Name: {i.strMeal}
                  </h3>
                  <h3
                    style={{
                      fontWeight: "bold",
                      marginTop: "10px",
                      color: "brown",
                      fontSize: "20px",
                    }}
                  >
                    Category: {i.strCategory}
                  </h3>
                </div>
              </Link>
            </>
          );
        })}
      </div>
      <FooterData></FooterData>
    </>
  );
};

export default RecipeNav;
