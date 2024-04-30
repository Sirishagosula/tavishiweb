import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ourwork from "./components/pages/Ourwork";
import Aboutus from "./components/pages/Aboutus";
import Workshop from "./components/pages/Workshop";
import Services from "./components/pages/Services";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
function App() {
  return (
    <Router>
      <div className="App"> <Navbar />
    <Routes>
      <Route path="/"
      Component={Ourwork}  />
      <Route path="/Aboutus" Component={Aboutus} />
      <Route path="/Services" Component={Services} />
      <Route path="/Workshop" Component={Workshop} />
      <Route path="/Contact" Component={Contact} />
    </Routes>
    <Footer/>
  </div>
  </Router>
   
     
  );
}

export default App;