import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import Animation from "./components/Animation";
import Packages from "./components/Packages";
import Anime from "./components/Anime";
import Footer from "./components/Footer";
import Accordin from "./components/Accordin";
import Cards from "./components/Cards";
import Imgdesign from "./components/Imgdesign";
import Firstpg from "./components/Firstpg";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/About" element={<AboutUs />} />
          <Route exact path="/Animation" element={<Animation />} />
          <Route exact path="/Packages" element={<Packages />} />
          <Route exact path="/Anime" element={<Anime />} />
          <Route exact path="/Footer" element={<Footer />} />
          <Route exact path="/Accordin" element={<Accordin />} />
          <Route exact path="/Cards" element={<Cards />} />
          <Route exact path="/Imgdesign" element={<Imgdesign />} />
          <Route exact path="/Firstpg" element={<Firstpg />} />

          <Route exact path="/Login" element={<Login />} />

          <Route exact path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
