import React from 'react'
import {Link} from "react-router-dom"
import "./Ourwork.css"
import work1 from "../Assets/work1.jpg";
import work2 from "../Assets/work2.png"
import work3 from "../Assets/work3.png";
import work4 from "../Assets/work4.png";
import work5 from "../Assets/work5.png" 

const Ourwork = () => {
  return (
    <div className='home-container'>
     <h3 className='head'> Web 
     and<br/> Software Development</h3>

     <div className='text'> Unleashing code magic,
      Advanced web applications, 
        <br/>
      beautiful product landing pages,
   
     Next-generation no-code solutions <br/>
     – all that your business needs to operate. 
    </div>
    
  <div className='work'>
    <Link>
    <img className="work1" src={work1}></img>
    </Link>
    <Link>
    <img className="work2"src={work2}></img>
    </Link>
    <Link>
    <img className="work3"src={work3}/>
    </Link>
    <Link>
    <img className="work4"src={work4}></img>
    
    </Link>
    <Link>
    <img className="work5"src={work5}></img>
    </Link>
  </div>
    
    <h2 className='head2'>
      Explore our <br/>Expertise in depth
    </h2>
  </div>



    
  )
}

export default Ourwork
