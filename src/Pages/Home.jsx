import React from "react";
import Hero from "../components/Hero";
import Story from "../components/Story";
import BestSellers from "../components/BestSellers";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Counting from "../components/Counting";
import Gallery from "../components/Gallery";

const Home = () => {
  return(
   <>
    <Hero/>
    <Counting/>
    <Story/>
    <BestSellers/>
    <Gallery/>
    <Menu/>
    <Footer/>
   </>
    
    
  )
}

export default Home;