import React, { useEffect } from 'react'
import './Destinations.css'
// Import icons
import { MdLocationPin } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocationArrowOutline } from "react-icons/ti";

//Imported Images
 import  image1  from "../../../Assests/i1.jpeg";
 import  image2  from "../../../Assests/image2.jpeg";
 import  image3  from "../../../Assests/image3.jpeg";
 import  image4  from "../../../Assests/image4.jpeg";
 import  image5  from "../../../Assests/image5.jpeg";
 import  image6  from "../../../Assests/image6.jpeg";
//  import  image7  from "../../../Assests/image7.jpg";
//  import  image8  from "../../../Assests/image7.jpg";
import Aos from 'aos';

//  Lets crreate an array that is gonna contain all destination data and we loop through 
const destinations = [
  {
    id:1,
    img:image1,
    name:'Toyota ',
    location:'Family Use',
    rating:4.5,
  },
  {
    id:2,
    img:image2,
    name:'Mercedes',
    location:'Personal Use',
    rating:4.6,
  },
  {
    id:3,
    img:image3,
    name:'Thar',
    location:'Adventure',
    rating:4.5,
  },
  {
    id:4,
    img:image4,
    name:'TVS Ntorq',
    location:'Solo Use',
    rating:4.5,
  },
  {
    id:5,
    img:image5,
    name:'Bharat Truck',
    location:'Industrial Use',
    rating:4.5,
  },
  {
    id:6,
    img:image6,
    name:'Hero Deluxe',
    location:'Daily Use',
    rating:4.5,
  },
  // {
  //   id:7,
  //   img:image7,
  //   name:'Buri Buri Island',
  //   location:'Indian Ocean',
  //   rating:4.5,
  // },
]

const Destinations = () => {
  useEffect(() => {
    Aos.init({duration : 2000});
  },[]);
  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">RIDE NOW </span>
          <h3 data-aos="fade-up">Find Your Perfect Vehicle</h3>
          <p data-aos="fade-up">
            Fill in the fields below to find the best Vehicle for your work.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex" data-aos="fade-up">
          <MdLocationPin className="icon"/>
          <input type="text" placeholder='Source Location'/>
          </div>

          <div className="inputField flex" data-aos="fade-up">
          <BsCreditCardFill className="icon"/>
          <input type="text" placeholder='Destinations'/>
          </div>
          
          <div className="inputField flex" data-aos="fade-up">
          <BsFillCalendar2DateFill className="icon"/>
          <input type="text" placeholder='Date'/>
          </div>
              <button className='btn flex' data-aos="fade-up"><BiSearchAlt className="icon"/>
              Pre-Booking</button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Bike</li>
            <li>Car</li>
            <li>Truck</li>
            <li>Scooty</li>
          </ul>
        </div>
        <div className="destinationContainer grid">
          {
            destinations.map(destination => {
              return(
                <div className="singleDestination" key={destination.id}>
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destination.img} alt="Destination Image" />
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">
                        {destination.name}</span>
                      <p className='flex'> <TiLocationArrowOutline className="icon"/>
                       {destination.location}
                      </p>
                    </div>
                    <span className="rating">
                      {destination.rating}
                    </span>
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Destinations;
