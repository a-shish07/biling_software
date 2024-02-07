import React, { useState } from 'react'
import './Navbar.css'

// Imported Icons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";


const Navbar = () => {
  // State to track and update navbar
  const [navBar,setNavBar] = useState("menu");
  // Function to show navbar 
  const showNavBar = ()=>  {
    setNavBar("menu showNavbar");
  };
  // Function to remove navbar
  const removeNavBar = ()=>  {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
        <div className="logoDiv">
            <BiLogoMediumOld className='icon'/>
            <span>DU-Trips</span>
        </div>

        <div className={navBar}>
            <ul>
                <li className='navList'>Destinations</li>
                <li className='navList'> About Us</li>
                <li className='navList'>Testimonial</li>
                <li className='navList'>Gallery</li>
            </ul>
            {/* Icon to remove Navbar */}
            <AiFillCloseCircle className='icon closeIcon ' onClick={removeNavBar}/>
        </div>
        <button className="signInBtn btn">Sign Up</button>
        {/* Icon to toggle Navbar */}
        <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>
    </div>
  )
};

export default Navbar;
