import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Features from "../Features/Features";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Features />
      <About />
      <Products />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
