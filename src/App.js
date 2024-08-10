// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Checkers from './Checkers';
import TicTacToe from './TicTacToe';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkers" element={<Checkers />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
