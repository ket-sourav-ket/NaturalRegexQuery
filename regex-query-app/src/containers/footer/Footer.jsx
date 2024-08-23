import React from 'react';
import rq3Logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="rq3__footer section__padding">
    <div className="rq3__footer-heading">
      
    </div>


    <div className="rq3__footer-links">
      <div className="rq3__footer-links_logo">
        <img src={rq3Logo} alt="rq3_logo" />
        <p>Smritikana Bandopadhaya <br/> Swarnali Dey <br/> Saptarshi Saha <br/> Sourabh Saha  <br /> All Rights Reserved</p>
      </div>
      <div className="rq3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="rq3__footer-links_div">
        <h4>Product</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="rq3__footer-links_div">
        <h4>Get in touch</h4>
        <p>9748760339</p>
        <p>mca2023046@gmail.com</p>
      </div>
    </div>

    <div className="r3__footer-copyright">
      <p>@2024 NaturalRegex. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;