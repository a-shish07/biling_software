import React, { useState } from 'react'
import './Navbar.css'
import { User, useAuth0 } from "@auth0/auth0-react";

// Imported Icons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";


const Navbar = () => {
  // State to track and update navbar
  const [navBar,setNavBar] = useState("menu");
  const { loginWithRedirect , logout , user, isAuthenticated, isLoading } = useAuth0();
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
        <div className='pict'>
          { isAuthenticated && <img src={user.picture} alt="User Image" /> }
        </div>
        <div className='name'>
          {isAuthenticated && <p> Welcome {user.name} </p> }
       </div>
       </div>
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
                <li></li>
            </ul>
            {/* Icon to remove Navbar */}
            <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar}/>
        </div>
        <ul>
        {
          //  For checking that whether the user is log in or not
          isAuthenticated ? (
            <li> 
              <button className="signInBtn btn"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
        </li>
          )
           : ( 
            <li> 
              <button className="signInBtn btn"  onClick={() => loginWithRedirect()}>Log In</button>
            </li>
           )
        }
        </ul>
        {/* Icon to toggle Navbar */}
        <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>
    </div>
  )
};

export default Navbar;
