import React from 'react';
import './Contact.css'; 

const Contact = () => {

  function handleDomainSelection(domain) {
    const selectedDomains = JSON.parse(localStorage.getItem('selectedDomains')) || [];
    
    const domainBox = document.getElementById(domain.replace(/\s/g, '_')); // Convert domain to a valid DOM id
    
    if (selectedDomains.includes(domain)) {
      localStorage.setItem('selectedDomains', JSON.stringify(selectedDomains.filter(item => item !== domain)));
      domainBox.classList.remove('selected');
    } else {
      localStorage.setItem('selectedDomains', JSON.stringify([...selectedDomains, domain]));
      domainBox.classList.add('selected');
    }
  }

  function handleBudgetSelection(budget) {
    localStorage.setItem('budgetEstimation', budget);
    const budgetBoxes = document.querySelectorAll('.budget-box');
    budgetBoxes.forEach(box => {
      if (box.textContent === budget) {
        box.classList.add('selected');
      } else {
        box.classList.remove('selected');
      }
    });
  }

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const selectedDomainsText = JSON.parse(localStorage.getItem('selectedDomains')).join(', ');
    const budgetEstimation = localStorage.getItem('budgetEstimation');
    
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
            <div id="Web_Design" className="domain-box" onClick={() => handleDomainSelection('Web Design')}>Web Design</div>
            <div id="Web_Development" className="domain-box" onClick={() => handleDomainSelection('Web Development')}>Web App Development</div>
            <div id="Mobile_App_Development" className="domain-box" onClick={() => handleDomainSelection('Mobile App Development')}>Mobile App Development</div>
            <div id="Desktop_App_Development" className="domain-box" onClick={() => handleDomainSelection('Desktop App Development')}>Desktop App Development</div>
            <div id="Crypto_and_Blockchain" className="domain-box" onClick={() => handleDomainSelection('Crypto and Blockchain')}>Crypto and Blockchain</div>
            <div id="Frontend_Development" className="domain-box" onClick={() => handleDomainSelection('Frontend Development')}>Frontend Development</div>
            <div id="AI_and_MachineLearning" className="domain-box" onClick={() => handleDomainSelection('AI and MachineLearning')}>AI and MachineLearning</div>
            <div id="Backend_Development" className="domain-box" onClick={() => handleDomainSelection('Backend Development')}>Backend Development</div>
            <div id="Devops" className="domain-box" onClick={() => handleDomainSelection('Devops')}>Devops</div>
            {/* Add more domain boxes as needed */}
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={Submit}>
            <input placeholder="Your Name" name="Name" type="text" />
            <input placeholder="Your Email" name="Email" type="text" />
            <textarea placeholder="Tell us about the project" name="Message"></textarea>
            <div className="budget-estimation">
              <div>Budget Estimation:</div>
              <div className="budget-boxes">
                <div className="budget-box" onClick={() => handleBudgetSelection('10k-20k USD')}>10k-20k USD</div>
                <div className="budget-box" onClick={() => handleBudgetSelection('25k-50k USD')}>25k-50k USD</div>
                <div className="budget-box" onClick={() => handleBudgetSelection('50k-100k USD')}>50k-100k USD</div>
                <div className="budget-box" onClick={() => handleBudgetSelection('100k+ USD')}>100k+ USD</div>
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
