import React, { useEffect } from 'react'
import './Portfolio.css'

// Imported assests
import icon1 from '../../../Assests/icon1.png';
import icon2 from '../../../Assests/icon2.png';
import icon3 from '../../../Assests/icon3.png';
import iimg2 from '../../../Assests/iimg2.jpg';
import Aos from 'aos';

const Portfolio = () => {
  useEffect(() => {
    Aos.init({duration : 2000});
  },[]);
  return (
    <div className='portfolio section container'>
      <div className="secContainer grid">
          <div className="leftContent">
            <div className="secHeading" data-aos="fade-up">
              <h1 data-aos="fade-up">Why Should You Choose Us</h1>
              <p data-aos="fade-up">
                We have the best and well maintained Vehicles at best prices.
              </p>
            </div>
            <div className="grid">
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon1} alt="Icon image" data-aos="fade-up"/>
                </div>
                <div className="infor">
                  <h2 data-aos="fade-up">Safety and Support</h2>
                  <p data-aos="fade-up">Our top priority is the safety and well being of our clients.We maintain high safety standards and have emergency support available for every vehicles.</p>
                </div>
              </div>
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon2} alt="Icon image" data-aos="fade-up" />
                </div>
                <div className="infor">
                  <h2 data-aos="fade-up">Diverse Range of Destinations</h2>
                  <p data-aos="fade-up">We provide a diverse range of vehicles from  all over the world with the best facilities that will make your trip memorable and comfortable.We take care of all the things that are needed for your use to make it unforgetable and special.</p>
                </div>
              </div>
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon3} alt="Icon image" data-aos="fade-up" />
                </div>
                <div className="infor">
                  <h2 data-aos="fade-up">24/7 Customer Support</h2>
                  <p data-aos="fade-up">We provide 24/7 customer support to our people so that they will not have to face any kind of problem during their trip.Just one call and we will be at your service anytime anywhere.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightContent" data-aos="fade-left">
            <img src={iimg2} alt="Image" />
          </div>
      </div>
    </div>
  )
};

export default Portfolio;
