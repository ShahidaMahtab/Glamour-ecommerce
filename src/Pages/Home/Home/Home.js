import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Features from "../Features/Features";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner/>
      <Features/>
      <About/>
      <Footer />
    </div>
  );
};

export default Home;
