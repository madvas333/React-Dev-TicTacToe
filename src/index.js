import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Checkers from './Checkers';
import TicTacToe from './TicTacToe';
import NavBar from './NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Checkers" element={<Checkers />} />
        <Route path="/TicTacToe" element={<TicTacToe />} /> {/* Add the new page route here! */}
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
