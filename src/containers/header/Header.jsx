import React from 'react';
import people from '../../assets/people.png';
import {Link} from 'react-router-dom'
import doc from '../../assets/document.png';
import './header.css';
import {Button} from '../../components/index'


const Header = (props) => (
  <div className="WhatRQ__header section__padding" id="home">
    <div className="WhatRQ__header-content">
      <h1 className="gradient__text">Make your document analysing experience seamless</h1>
      <p style={{color: "white"}}>Use our voice assisted document analysing tools to transform your workflow</p>
 

      {props.isLogged? (
        <>
        <Button onPress = {props.onPress} >Select file</Button>
        </>
      ):(
      <div className="WhatRQ__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <Link to={`login`}> <Button  onPress = {props.onLogin}>Quick Search</Button>  </Link>
        
      </div>
      )
      }

      <div className="WhatRQ__header-content__people">
        <img src={people} />
      </div>
    </div>

    <div className="WhatRQ__header-image">
      <img src={doc} />
    </div>
  </div>
);

export default Header;