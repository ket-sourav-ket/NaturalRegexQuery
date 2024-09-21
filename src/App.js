import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Routes path='/' exact component={Home} />
          <Routes path='/reports' component={Reports} />
          <Routes path='/products' component={Products} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
