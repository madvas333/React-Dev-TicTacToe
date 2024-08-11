import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Checkers from './Checkers';
import TicTacToe from './TicTacToe';
import NavBar from './NavBar'
import './styles.css'

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
      </Router>
    </div>  
  );
}

export default App;
