import React from "react";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Message from "./pages/Message";
import Portfolio from "./pages/Portfolio";

const Routers = () => {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/portfolio" element={ <Portfolio />} />    
        <Route path="/contact" element={ <Contact />} />
        <Route path="/message" element={ <Message />} />
      </Routes>
    // </Router>
  )
}
export default Routers;