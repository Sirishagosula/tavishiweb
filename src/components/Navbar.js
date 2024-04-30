import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../components/logo.png"

import { FaBars, FaTimes } from "react-icons/fa";
import Contact from "./pages/Contact";
function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  return (
    <>
      
        <nav className="navbar">
          <div className="navbar-container container">
            <Link>
              <img  className="nav-logo" src={logo}></img>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Our work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Aboutus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Workshop"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Workshop
                </Link>
              </li>
              <li className="nav-button">
                <Link
                  to="/Contact"
                  className="nav-button"
                  onClick={Contact}
                >
                  Get a Quote
                </Link>
              </li>
             
            </ul>
          </div>
        </nav>
   
    </>
  );
}
export default Navbar;
