import React from "react";
import Navbar from "./Navbar";
import ApiData from "./ApiData";
import FooterData from "./FooterData";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <ApiData></ApiData>
      <FooterData></FooterData>
    </>
  );
};

export default Home;
