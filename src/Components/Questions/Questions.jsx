import React, { useEffect, useState } from 'react'
import './Questions.css'
import Accordion from './Accordion';
import Aos from 'aos';

const Questions = () => {
  useEffect(() => {
    Aos.init({duration : 2000});
  },[]);
  const [active, setActive] = useState("How do I choose the right travel destination for me?");
  return (
    <div className='questions section container'>
      <div className="secHeading" data-aos="fade-up">
        <h2 data-aos="fade-up">Frequently Asked Questions</h2>
      </div>
      <div className="secContainer grid">
        {/* {We will import a component from a different file} */}
        <div className="accordion grid" data-aos="fade-up">
            <Accordion 
             title="How do I choose the right travel destination for me?" 
             desc="Consider your interests , budget, desired experiences, and the type of environment you enjoy. Research or activities you find appealing." active={active} setActive={setActive}/>

            <Accordion 
             title="What are the best times to visit specific destinations?" 
             desc="Research the climate, weather patterns, and peak tourist seasons of the destination you are interested in." active={active} setActive={setActive}/>

            <Accordion 
             title="How can I find budget-friendly travel options and deals?" 
             desc="Look for travel deals, discounts on flights and accommodations, and consider using travel apps or websites that offer competitive prices." active={active} setActive={setActive}/>

            <Accordion 
             title="What essential items should I pack for my adventure?" 
             desc="Pack appropriate clothing, toiletries, travel documents(passport, visa, etc), and any specific gear needed for your adventure." active={active} setActive={setActive}/>
        </div>
        <div className="form">
          <div className="secHeading"  data-aos="fade-up">
            <h3  data-aos="fade-up">Do you have any specific question?</h3>
            <p  data-aos="fade-up">
              Please fill the form below andd our dedicated team will get intouch with you as soon as possible.
            </p>
          </div>
          <div className="formContent grid"  data-aos="fade-up">
            <input type="email" placeholder='Enter email address' />
            <textarea placeholder='Enter your question here'></textarea>
            <button className='btn btn1'>Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Questions;
