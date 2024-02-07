import React, { useEffect } from 'react'
import './Subscribe.css'
import subs from '../../../Assests/subs.jpg'
import Aos from 'aos';

const Subscribe = () => {
  useEffect(() => {
    Aos.init({duration : 2000});
  },[]);
  return (
    <div className='subscribe section container'>
      <div className="secContainer grid"  data-aos="fade-right">
          <img src={subs} alt="Div Image" />

          <div className="textDiv">
            <h2  data-aos="fade-up">
                Best Way To Start Your Journey!
            </h2>
            <p  data-aos="fade-up">
              We offer personalized itineraies tailored to individual preferences and interests.
            </p>
            <button className='btn'  data-aos="fade-up">
              Start Here
            </button>
          </div>
      </div>
    </div>
  )
};

export default Subscribe;
