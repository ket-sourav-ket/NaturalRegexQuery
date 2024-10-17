import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatRQ.css';

const WhatRQ = () => (
  <div className="rq3__whatRQ section__margin" id="wrq3">
    <div className="rq3__whatRQ-feature">
      <Feature title="What is NaturalRegex" text="Analyse your documents in a natural manner using voice assisted natural language based searching tools. Simplify your workflow with Natural Regex, a tool that allows you to use natural language to make complex search queries on your documents and generate detailed reports of your queries." />
    </div>
    <div className="rq3__whatRQ-heading">
      <h1 className="gradient__text">The new way to analyse documents</h1>
      <p style={{color:'white'}}>Learn More</p>
    </div>
    <div className="rq3__whatRQ-container">
      <Feature title="Accesible" text="Easily search for complex patterns in your documents using conversational prompts and voice enabled search tools" />
      <Feature title="Analyse" text="Get detailed reports of your search queries and a breakdown of various statistics pertaining to your documents" />
      <Feature title="Clerical work" text="Streamline your office workflow with NaturalRegex and easily search for data in your document corpus" />
    </div>
  </div>
);

export default WhatRQ;