import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Route, Routes, Navigate} from "react-router-dom";
import Footer from "./Footer";
import './style.css'

const App = () => {
  return (
    <>
    <div className="expand-lg" />
    <div className="container">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>}>
        </Route>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<Navigate to ="/Home" />}/>
      </Routes>
      <Footer />
      </div>

    </>
  );
};

export default App;
