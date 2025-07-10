import React from "react";
import Header from "../../partials/Header";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import Specialist from "./specialist/Specialist";
import Emergency from "./emergency/Emergency";
import Pharmacy from "./pharmacy/Pharmacy";
import Footer from "../../partials/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Specialist />
      <Emergency/>
      <Pharmacy/>
      <Footer/>
    </>
  );
};

export default Home;
