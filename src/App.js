// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() { 
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkers" element={<Checkers />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
