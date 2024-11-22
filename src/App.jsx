import React from "react";
import Landing from "./pages/Landing";
import "./App.css";
import Service from "./pages/Service";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import SignleService from "./pages/SignleService";

const App = () => {
  return (
    <>
    <a href="https://wa.me/447868993110?text=Hi *Netseel*! I need more info about your services" className="watsupp"><img width={40} src="/img/wh.png" alt="" /></a>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:sType" element={<SignleService />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
