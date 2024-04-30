import React from 'react'
import "../pages/Services.css"
import {Link} from "react-router-dom";
import service from "../Assets/services.png"
const Services = () => {
  return (

<div class="main-container">
<div className="services-container">
      
      <div className="left-column">
        <div className="small-heading">Services</div>
        <div className="big-heading">Elevate your vision</div>
        <p className="paragraph">
        Tavishi specializes in multiple types of services - from custom software development to team augmentation and body leasing. Our experienced team of experts will help you choose the right solution for your business.
        </p>
        <Link to="/contact"
                    className="nav-button-services" 
                  >
                   Hire us
                  </Link>
        {/* timeline */}
        
        <div className="scrolling-text-container">
            <div className="scrolling-text">
              Disruptive <br /> and Beyond
            </div>
          </div>
          
    
      </div>
   
      <div className="right-column">
        <img src={service} alt="Your image" className="image" />
      </div>
      
    </div>
    <section class="section intro">
  <div class="container">

  </div>
</section>

<section class="timeline">

   
  

  <ol>
   
    <li>
      <div>
      <h1 >Work Shop</h1>
        <time>Brief us</time>
      </div>
    </li>
    <li>
      <div>
        <time>Kick off meeting</time>
      </div>
    </li>
    <li>
      <div>
        <time>Q&A Session</time> 
      </div>
    </li>
    <li>
      <div>
        <time>Project scope of work and estimate</time> 
        </div>
    </li>
    <li>
      <div>
        <time>Plan</time> 
      </div>
    </li>
    <li>
      <div>
        <time>Strategy</time> 
      </div>
    </li>
    <li>
      <div>
        <time>Research</time> 
      </div>
    </li>
    <li>
      <div>
        <time>Analysis</time> 
      </div>
    </li>
    <li>
      <div>
        <time>Design</time>
      </div>
    </li>
    <li>
      <div>
        <time>Development</time> 
      </div>
    </li>
    <li>
      <div>
        <time>Testing</time> 
      </div>
    </li>
    <li>
      <div>
        <time>Release</time> 
      </div>
    </li>
    <li></li>
  </ol>

</section>

<div className='service-end'>
  <h1>App-solute Ambition?</h1>
  <div>
    <h3>Let's turn your business vision into a thriving reality</h3>
    <div>
    
                <Link
                  to="/contact"
                  className="nav-button"
                
                >
                  Get a Quote
                </Link>
    </div>
  </div>
</div>
    
</div>
    



  

  
  )
}

export default Services
