import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="rq3__possibility section__padding" id="possibility">
    <div className="rq3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="rq3__possibility-content">
      <h1 className="gradient__text">Analyse your documents <br /> in a brand new way </h1>
      <p>Search for complex patterns in your documents with worrying about the technicalities of regular expressions. Do more with the voice enabled search tools in simple conversational style.</p>
    </div>
  </div>
);

export default Possibility;