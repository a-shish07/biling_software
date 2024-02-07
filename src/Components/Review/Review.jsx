import React, { useEffect } from 'react'
import './Review.css'

// Imported icons
import { AiFillStar } from 'react-icons/ai';

// Imported Images
import  image1  from "../../../Assests/client1.jpg";
import  image2  from "../../../Assests/client2.jpg";
import  image3  from "../../../Assests/client3.jpg";
import  image4  from "../../../Assests/client4.jpg";
import  image5  from "../../../Assests/client5.jpg";
import Aos from 'aos';

const Review = () => {
  useEffect(() => {
    Aos.init({duration : 2000});
  },[]);
  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">FROM OUR CLIENTS</span>
          <h1 data-aos="fade-up"> Real Travel History From Our Beloved Clients</h1>
          <p data-aos="fade-up">
            By choosing us at their tour agency, customers can expect an enriching and enjoyable travel experience,filled with unforgettable memories that will last a lifetime.
          </p>
          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
          </span>
          <div className="clientsImages flex" data-aos="fade-up">
            <img src={image1} alt="Client Image" />
            <img src={image2} alt="Client Image" />
            <img src={image3} alt="Client Image" />
            <img src={image4} alt="Client Image" />
          </div>
        </div>
        <div className="imgDiv" data-aos="fade-right">
          <img src={image5} alt="Div image" />
        </div>
      </div>
    </div>
  )
};

export default Review;
