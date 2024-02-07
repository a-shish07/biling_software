import React, { useEffect } from 'react'
import './Footer.css'

import {BiLogoMediumOld} from 'react-icons/bi'
import {ImFacebook} from 'react-icons/im'
import { BsTwitterX } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import Aos from 'aos';

const Footer = () => {
  useEffect(() => {
    Aos.init({duration : 2000});
  },[]);
  return (
    <div className='footer ' data-aos="fade-up">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
          <BiLogoMediumOld className="icon"/>
          <span>DU-Trips</span>
          </div>
          <div className="socials flex">
            <ImFacebook className="icon"/>
            <BsTwitterX className="icon"/>
            <AiFillInstagram className="icon"/>
          </div>
        </div>
        
          <div className="footerLinks">
            <span className="linkTitle">
                Information
            </span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </div>
          <div className="footerLinks">
            <span className="linkTitle">
                Helpful Links
            </span>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </div>
          <div className="footerLinks">
            <span className="linkTitle">Contact Details</span>
            <span className="phone">+651 23 687</span>
            <span className="email">ashish@gmail.com</span>
            
          </div>
      </div>
    </div>
  )
};

export default Footer;
