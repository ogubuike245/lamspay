import React from "react";
import Features from "../../components/Features/Features";
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Intro />
      <Features />
    </>
  );
};

export default index;
