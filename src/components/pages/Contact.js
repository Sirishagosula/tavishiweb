import React, { useState } from 'react';
import './Contact.css'; 
const Contact = () => {
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [budgetEstimation, setBudgetEstimation] = useState('');

  function handleDomainSelection(domain) {
    if (selectedDomains.includes(domain)) {
      setSelectedDomains(selectedDomains.filter(item => item !== domain));
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  }

  function Submit(e) {
    e.preventDefault();
     const formEle = document.querySelector("form");
  const formDatab = new FormData(formEle);
  const selectedDomainsText = selectedDomains.join(', ');
  
  // Append selected domains and budget estimation as text
  formDatab.append("SelectedDomains", selectedDomainsText);
  formDatab.append("BudgetEstimation", budgetEstimation);
  
  fetch(
    "https://script.google.com/macros/s/AKfycbwQQmnDI8uc5vRfs9QSFeRhH2IzO7ghYsIvBZE5zqyASPy31c73US7jxUUDN3R7zEXYFg/exec",
    {
      method: "POST",
      body: formDatab
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="container">
     
      <section className="main-content">
        <h1 className='contact-heading'>Let's build an awesome project together</h1>
        <h1>Describe your project and leave us your contact info, we'll get back to you within 24 hours.</h1>
        <div className="need-section">
          <div>What do you need?</div>
          <div className="domain-boxes">
            <div className={selectedDomains.includes('Web Design') ? "domain-box selected" : "domain-box"} onClick={() => handleDomainSelection('Web Design')}>Web Design</div>
            <div className={selectedDomains.includes('Web Development') ? "domain-box selected" : "domain-box"} onClick={() => handleDomainSelection('Web Development')}>Web App Development</div>
            <div className={selectedDomains.includes('Mobile App Development') ? "domain-box selected" : "domain-box"} onClick={() => handleDomainSelection('Mobile App Developmentt')}>Mobile App Development</div>
            <div className={selectedDomains.includes('Desktop App Development') ? "domain-box selected" : "domain-box"} onClick={() => handleDomainSelection('Desktop App Development')}>Desktop App Development</div>
            <div className={selectedDomains.includes('Crypto and Blockchaint') ? "domain-box selected" : "domain-box"} onClick={() => handleDomainSelection('Crypto and Blockchain')}>Crypto and Blockchain</div>
            <div className={selectedDomains.includes('Frontend Development') ? "domain-box selected" : "domain-box"} onClick={() => handleDomainSelection('Frontend Development')}>Frontend Development</div>
            <div className={selectedDomains.includes('AI and MachineLearning') ? "domain-box selected" : "domain-box"} onClick={() => handleDomainSelection('AI and MachineLearning')}>AI and MachineLearning</div>
            <div className={selectedDomains.includes('Backend Development') ? "domain-box selected" : "domain-box"} onClick={() => handleDomainSelection('Backend Development')}>Backend Development</div>
            <div className={selectedDomains.includes('Devops') ? "domain-box selected" : "domain-box"} onClick={() => handleDomainSelection('Devops')}>Devops</div>
            {/* Add more domain boxes as needed */}
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={(e) => Submit(e)}>
            <input placeholder="Your Name" name="Name" type="text" />
            <input placeholder="Your Email" name="Email" type="text" />
            <textarea placeholder="Tell us about the project" name="Message"></textarea>
            <div className="budget-estimation">
              <div>Budget Estimation:</div>
              <div className="budget-boxes">
                <div className={budgetEstimation === '10k-20k USD' ? "budget-box selected" : "budget-box"} onClick={() => setBudgetEstimation('10k-20k USD')}>10k-20k USD</div>
                <div className={budgetEstimation === '25k-50k USD' ? "budget-box selected" : "budget-box"} onClick={() => setBudgetEstimation('25k-50k USD')}>25k-50k USD</div>
                <div className={budgetEstimation === '50k-100k USD' ? "budget-box selected" : "budget-box"} onClick={() => setBudgetEstimation('50k-100k USD')}>50k-100k USD</div>
                <div className={budgetEstimation === '100k+ USD' ? "budget-box selected" : "budget-box"} onClick={() => setBudgetEstimation('100k+ USD')}>100k+ USD</div>
                {/* Add more budget estimation ranges as needed */}
              </div>
            </div>
            
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
