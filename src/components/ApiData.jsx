import React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// import React, { useEffect } from "react
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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          {data.map((api) => {
            return (
              <>
                <Link
                  to={`/${api.idMeal}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <img
                      className="image"
                      src={api.strMealThumb}
                      style={{
                        width: "350px",
                        // length: "50px",
                        // maxHeight: "450px",
                        padding: "10px",
                        marginTop: "20px",
                      }}
                    />
                    <h3
                      style={{
                        fontWeight: "bold",
                        marginTop: "10px",
                        color: "black",
                        marginLeft: "110px",
                      }}
                    >
                      {api.strMeal}
                    </h3>
                  </div>
                </Link>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
export default ApiData;
