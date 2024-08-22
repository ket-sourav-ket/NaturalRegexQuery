import React from 'react';
import { Features,Footer,Header,Report,WhatRQ } from './containers';
import { Article,Brand,Cta,Feature,Navbar } from './components';
import './App.css';







const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />


      </div>
      <Brand />
      <WhatRQ />
      <Features />
      <Cta />
      <Footer />
      
       </div>
  )
}

export default App
