import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Checkers from './components/Checkers.js';
import TicTacToe from './components/TicTacToe.js';
import Footer from './components/Footer.js'
import './components/Footer.css'
import './components/Navbar.css'
import NavBar from './components/NavBar.js'

function App() { 
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checkers" element={<Checkers />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
        </Routes>
        <Footer />
      </Router>
    </div>  
  );
}

export default App;
