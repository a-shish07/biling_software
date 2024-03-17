import React, { useEffect } from 'react'
import './Middle.css'
import Aos from 'aos';
import "aos/dist/aos.css";

const Middle = () => {
  useEffect(() => {
    Aos.init({duration : 2000});
  },[]);
  return (
    <div className="middle section">
      <div className="secContainer container">
        <div className="grid">
          <span className="flex"  data-aos="fade-up">
            <h2>20+</h2>
            <p>
            <strong>Vehicles</strong>
            </p>
          </span>
          <span className="flex"  data-aos="fade-up">
            <h2>2K+</h2>
            <p>
            <strong>Daily Users</strong>
            </p>
          </span>
          <span className="flex"  data-aos="fade-up">
            <h2>10K+</h2>
            <p>
            <strong>Customer Reviews</strong>
            </p>
          </span>
          <span className="flex"  data-aos="fade-up">
            <h2>4.8</h2>
            <p>
            <strong>Overall Rating</strong>
            </p>
          </span>
        </div>
      </div>
    </div>
  )
};

export default Middle;
