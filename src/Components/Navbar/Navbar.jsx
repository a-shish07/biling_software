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
      <div className='user'>
       </div>
        <div className="logoDiv">
            <BiLogoMediumOld className='icon'/>
            <a href="/"><span>DU Trips</span></a>
        </div>

        <div className={navBar}>
            <ul>
            <a href="/"><li className='navList'>Cars</li></a>
               <a href="/"><li className='navList'>Testimonials</li></a>
               <a href="/"><li className='navList'>Booking</li></a>
               <a href="/"><li className='navList'>Contact Us</li></a>
                <li></li>
            </ul>
            {/* Icon to remove Navbar */}
            <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar}/>
        </div>
        <ul>
            <li> 
               <a href="/"><li className='signInBtn btn admin'>Admin</li></a>
              <button className="signInBtn btn"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin}} )}>
          Log Out
        </button>
        </li>
          )
           : ( 
            <li> 
              <button className="signInBtn btn"  onClick={() => loginWithRedirect()}>Log In</button>
            </li>
        </ul>
        {/* Icon to toggle Navbar */}
        <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>
    </div>
  )
};

export default Navbar;
