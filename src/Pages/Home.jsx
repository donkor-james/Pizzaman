import React from "react";
import Hero from "../components/Hero";
import Story from "../components/Story";
import BestSellers from "../components/BestSellers";
import Menu from "../components/Menu";
import Counting from "../components/Counting";
import Gallery from "../components/Gallery";
import Shop from "../components/Shop";
import ScrollUp from "../Components/ScrollUp";
import Footer1 from "../Components/Footer1";

const Home = () => {
  return(
   <>
    <Hero/>
    <Counting/>
    <Story/>
    <Shop/>
    <BestSellers/>
    <Gallery/>
    <Menu/>
    <Footer1/>
    <ScrollUp />
   </>
    
    
  )
}

export default Home;