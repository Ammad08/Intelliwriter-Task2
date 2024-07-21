import React from 'react';
import Navbar from "./Navbar";
import Firstpg from "./Firstpg";
import AboutUs from "./AboutUs";
import Imgdesign from "./Imgdesign";
import Anime from "./Anime";
import Cards from "./Cards";
import Packages from "./Packages";
import Footer from "./Footer";
import Cookies from "./Cookies";
import Accordion from './Accordin';


export default function Main() {
  return (
    <div>
      <Navbar/>
    <Firstpg/>
    <AboutUs/>
    <Imgdesign/>
    <Anime/>
    <Cards/>
    <Packages/>
    <Accordion/>
    <Footer/>
    <Cookies/>
    </div>
    
  )
}
