import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet , useLoaderData} from 'react-router-dom';
import { Footer,Header,Possibility,Report,WhatRQ } from './containers';
import { Article,Cta,Feature,Navbar,Uploader, Button, Login } from './components';


import './App.css';



export async function loader({request, params}) {

  return false;
  
}



const App = () => {

  useEffect(()=> {
    console.log(localStorage.getItem('isLogged'));
    if(localStorage.getItem('isLogged') === 'true')
      setIsLogged(true);
    else 
      setIsLogged(false);
  });
  let state = useLoaderData();
  const [isLogged, setIsLogged] = useState( false);
  const [isPressed, setIsPressed] = useState( false);
  const handleLogIn = (event) => 
  {
    localStorage.setItem('isLogged', false);
    setIsLogged(true);
    

  }

  const handleLogOut = (event) => 
    {
      localStorage.setItem('isLogged', true);
      setIsLogged(false);
      
  
    }

  const handlePress = (event) =>
  {
    
    setIsPressed(true);
    

  }
  
  return (
    <div className='App'>
      
      <div className='gradient__bg'>
      
      
        <Navbar isLogged = {isLogged}
        onLogout = {()=>{
          localStorage.setItem('isLogged', false);
          setIsLogged(false)}} />

        <Header onLogin = {handleLogIn} isLogged = {isLogged} onPress={handlePress} isPressed = {isPressed} />
        {isPressed && <Uploader />}

        
        


      
      <WhatRQ />
      <Possibility/>
      <Cta />
      <Footer />
            
       </div>
       </div>
  )
}

export default App
