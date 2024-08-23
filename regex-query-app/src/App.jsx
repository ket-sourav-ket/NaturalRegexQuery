import React from 'react';
import { Footer,Header,Possibility,Report,WhatRQ } from './containers';
import { Article,Cta,Feature,Navbar } from './components';
import './App.css';







const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />


      
      <WhatRQ />
      <Possibility/>
      <Cta />
      <Footer />
      
       </div>
       </div>
  )
}

export default App
