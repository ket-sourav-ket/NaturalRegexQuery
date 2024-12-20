import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="WhatRQ__navbar">
      <div className="WhatRQ__navbar-links">
        <div className="WhatRQ__navbar-links_logo">
          <img src={logo} />
        </div>
          
        <div className="WhatRQ__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatRQ">What is NLRegex?</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#report">Reports</a></p>
        </div>
        
      </div>
      <div className="WhatRQ__navbar-sign">
      <button type="button">Sign In</button>
      <button type="button">Sign up</button>
        </div>
     
      <div className="WhatRQ__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#5d3abd" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#5d3abd" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="WhatRQ__navbar-menu_container scale-up-center">
          <div className="WhatRQ__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wrq">What is Natural Regex?</a></p>
            <p><a href="#possibility">Open Source</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="WhatRQ__navbar-menu_container-links-sign">
            <button type="button">sign in</button>
            <button type="button">Sign up</button>
          </div>
        </div>
        )} 
      </div>
      
    </div>
  );
};

export default Navbar;