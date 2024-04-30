import React from 'react'
import workshop from "../Assets/workshop.jpg"
import "../pages/Workshop.css"
const Workshop = () => {
  return (
    <div className='workshop'>
      <h1 className='text'>Workshop</h1>
      
       <div className='heading'>Where ideas come into life</div> 
      
      <div className='heading-para'>
        <p>
        Our most experienced and talented people will help you harden your idea and prepare a clear plan for its delivery. You are in good hands.
        </p>
      </div>
      <div >
        <img className='workshop-image' src={workshop}></img>
      </div>
      <h1 className='heading-work'>INGREDIENTS OF WORKSHOP</h1>
    <div class="container">
        <div class="box">
            <h2 className='heading-workshop'>Q&A Session</h2>
            <p>Top-notch expertise and consultancy to fully understand the idea, and deliver prime solutions - Web, Mobile, AI, Machine Learning, AR/VR, and Internet of Things (IoT).</p>
            <h2 className='heading-workshop'>UX Audits</h2>
            <p>Discovery of business environment, business needs, project scope, and user experience patterns.

            </p>

<h2 className='heading-workshop'>Comprehensive Interviews</h2>            <p>Our experts will conduct user interviews to understand your market and user, as well as current gaps and niches you can fill, increasing the chances of success for your product.</p>
        </div>
        <div class="box">
            <h2 className='heading-workshop'>UX Audits</h2>
            <p>Discovery of business environment, business needs, project scope, and user experience patterns.</p>
            <h2 className='heading-workshop'>Product concepts</h2>
            <p>Our UX designers and product managers will assist in creating your product's concept, focusing on features, UI/UX, and brand design to highlight its strengths and visual appeal.

            </p>

<h2 className='heading-workshop'>Delivery plan</h2>            <p>The overall idea for the project delivery - with crucial milestones.</p>
        </div>
    </div>
    
    </div>
  )
}

export default Workshop
