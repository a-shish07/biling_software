import React, { useEffect } from 'react'
import './Home.css'

// Imported Assest
import image1  from '../../../Assests/i1.jpeg'
import image2 from '../../../Assests/image2.jpeg'
import image3 from '../../../Assests/image3.jpeg'
import image4  from '../../../Assests/image4.jpeg'
import image5  from '../../../Assests/immg.jpg'
// import image1 from '../../../Assests/i1.jpg'

// Imported Icons
import { AiOutlineSwapRight } from 'react-icons/ai';
import Aos from 'aos'
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({duration : 2000});
  },[]);
  return (
    <div className="Home">
      <div className="videoBg">
        {/* <video src={Video} autoPlay loop muted></video> */}
        <img src={image5} alt="Destination Images"  className='i'/>
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-up">
          Unlock Your Travel Dreams With Us!!</h1>
          <p  data-aos="fade-up">Discover the world's most adventurous nature,life is so short for a trip.</p>
          <button className="btn flex" data-aos="fade-up">GET STARTED <AiOutlineSwapRight className="icon"/></button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3  data-aos="fade-up">Popular Places</h3>
          <div className="images flex"  data-aos="fade-up">
            <img src={image1} alt="Destination Images" />
            <img src={image2} alt="Destination Images" />
            <img src={image3} alt="Destination Images" />
            <img src={image4} alt="Destination Images" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
