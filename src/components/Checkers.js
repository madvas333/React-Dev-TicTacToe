import React, { useState } from 'react';
import Checkerboard from './Checkerboard'; // Import your new Checkerboard component
import './Checkers.css'; // Your CSS file for this page

export default function Checkers() {
  // Let's add some sparkle by managing move history in state
  const [moveHistory, setMoveHistory] = useState([
    "Player <3 moved to row 1, col 2",
    "Player O moved to row 2, col 3",
  ]);

  return (
    <div className="checkers-page">
      <h1>Checkers Game</h1>
      
      {/* The checkerboard and move history */}
      <div className="game-content">
        <Checkerboard setMoveHistory={setMoveHistory} />

        {/* Move history in a separate, totally adorable box */}
        <div className="move-history-box">
          <h3>Move History</h3>
          <ul>
            {moveHistory.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer at the bottom of the page with extra fabulous content */}
      <footer>
        💖 Fabulous Footer Content! 💖
      </footer>
    </div>
  );
}
