import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const submit = (e) => {
    e.preventDefault();
    navigate(`/Search/${input}`);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          margin: "0px",
          padding: "0px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="container-fluid"
          style={{ backgroundColor: "#ffa500", minHeight: "70px" }}
        >
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <a className="navbar-brand" href="#" style={{ fontWeight: "bold" }}>
              RECIPE APP
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <Link to={`/`} style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href=""
                    style={{ fontWeight: "bold" }}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link to={`/RecipeNav`} style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link active"
                    href=""
                    style={{ fontWeight: "bold" }}
                  >
                    Recipe
                  </a>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={submit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search your  receipe..."
                aria-label="Search"
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="btn "
                type="submit"
                style={{ backgroundColor: "white", fontWeight: "bold" }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <div className="nav">
        <div className="left">
          <h2>RecipeApp!</h2>
        </div>
        <div className="search">
          <input
            type="text"
            className="input"
            placeholder="Search Your Favourite Recipe..."
          ></input>
          <i class="fa-solid fa-magnifying-glass"></i>
          <button type="submit" className="recipe_Btn">
            Search
          </button>
        </div>
        <div className="right">
          <div className="home">Home</div>

          <div className="recipe">Recipe</div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
