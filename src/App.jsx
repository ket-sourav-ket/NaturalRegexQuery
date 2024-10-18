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
  let state = useLoaderData();
  console.log(state)
  const [isLogged, setIsLogged] = useState( state);
  const [isPressed, setIsPressed] = useState( state);
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
      
      
        <Navbar onLogin = {handleLogIn} isLogged = {isLogged} onLogout = {handleLogOut} />
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
