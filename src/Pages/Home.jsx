import React from "react";
import Hero from "../components/Hero";
import Story from "../components/Story";
import BestSellers from "../components/BestSellers";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Home = () => {
  return(
   <>
    <Hero/>
    <Story/>
    <BestSellers/>
    <Menu/>
    <Footer/>
   </>
    
    
  )
}

export default Home;