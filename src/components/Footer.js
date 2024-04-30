import React from 'react'
import logo from "../components/logo.png"
import {Link} from "react-router-dom"
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
  <img src={logo}></img>
  <h1 className='footer-text'>
    We are the <br/> Digital Heartbeat 
  </h1>
  <div className='menu'>  
    <div className='list'> 
    <h2 className='f-menu'>Menu</h2>
    <li>
      <Link className='link' to="/">Our Work</Link>
    </li>
    <li>
      <Link className='link' to="/Aboutus">About us</Link>
    </li>
    <li>
      <Link className='link' to="/Services">Services</Link>
    </li>
   </div>
  
  
    <div className='list'>
    <h2 className='f-menu'>Contact</h2> <li>
      <Link className='link' to="/contact">Get a qoute</Link>
    </li>
    <li>
      <Link className='link' to="/contact">Say Hi</Link>
    </li>
   </div>
  </div>
   
   <div className='copyright'>2024TAVISHI@.ALL RIGHTS RESERVED</div>
  
  
 
    </div>
  )
}

export default Footer
