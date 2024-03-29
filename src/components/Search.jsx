import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FooterData from "./FooterData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Search = () => {
  // console.log(useParams());
  const { searchName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
      );
      const data = await url.json();
      setData(data.meals);
      console.log(data);
    };
    fetchApi();
  }, [searchName]);
  return (
    <>
      <Navbar></Navbar>
      <div className="corba">
        {data == null ? (
          <>
            <div className="section">
              <div className="content">
                <p style={{ color: "black", fontWeight: "bold" }}>
                  This recipe is not available please look for another one...
                </p>
              </div>
            </div>
          </>
        ) : (
          data.map((i) => {
            return (
              <>
                {/* <div className="searchrecipe"> */}
                <Link
                  to={`/${i.idMeal}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div className="crba">
                      <img
                        style={{ width: "320px" }}
                        src={i.strMealThumb}
                        alt=""
                      />
                    </div>
                    <h3 style={{ fontWeight: "bold", marginTop: "10px" }}>
                      {i.strMeal}
                    </h3>
                    <h3
                      style={{
                        fontWeight: "bold",
                        marginTop: "10px",
                        color: "brown",
                        fontSize: "20px",
                      }}
                    >
                      {i.strArea} Food
                    </h3>
                  </div>
                </Link>
                {/* </div> */}
              </>
            );
          })
        )}
      </div>
      <FooterData></FooterData>
    </>
  );
};

export default Search;
