import React from 'react'
import "../pages/Aboutus.css"
import {Link} from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import about from "../Assets/about.png"
import react from "../Assets/react.png"
import next from "../Assets/next.png"
import html from "../Assets/html.jpg"
import angular from "../Assets/angular.jpg"
import ts from "../Assets/ts.jpg"
const Aboutus = () => {
  return (
   
 <div className='about'>
     <h3 className='heading'> Fortifying Futures<br/> With Faultless Code</h3>

     <div className='about-subtitle'> Tavishi has been founded by a team of experienced IT experts from different fields with a goal to offer the best quality, transparency, and flexibility and to become a center of innovation for other companies. 
    </div>
    

  <h2>Cutting Edge Technologies</h2>
   
  <div class="slider">
  <div class="slide-track">
    <div class="slide">
    <img src={react} alt=""/>
    </div>
    <div class="slide">
    <img src={next} alt=""/>
    </div>
    <div class="slide">
    <img src={html} alt=""/>
    </div>
    <div class="slide">
    <img src={angular} alt=""/>
    </div>
    <div class="slide">
    <img src={ts} alt=""/>
    </div>
    <div class="slide">
    <img src={react} alt=""/>
    </div>
    <div class="slide">
    <img src={next} alt=""/>
    </div>
    <div class="slide">
    <img src={html} alt=""/>
    </div>
    <div class="slide">
    <img src={angular} alt=""/>
    </div>
    <div class="slide">
    <img src={ts} alt=""/>
    </div>
  </div>
  </div>
  <div>
    <img className="about-image"src={about}/>
  </div>
    </div>
  )
}

export default Aboutus
