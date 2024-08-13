import React from 'react';
import './Checkers.css'; // Link to your checkerboard-specific CSS

export default function Checkerboard() {
  const size = 8; // Checkerboard is typically 8x8
  const board = [];

  // Create the board
  for (let row = 0; row < size; row++) {
    const squares = [];
    for (let col = 0; col < size; col++) {
      const isBlack = (row + col) % 2 === 1; // Alternating pattern
      squares.push(
        <div 
          key={`${row}-${col}`} 
          className={`square ${isBlack ? 'black' : 'white'}`}
        />
      );
    }
    board.push(
      <div key={row} className="row">
        {squares}
      </div>
    );
  }

  return <div className="checkerboard">{board}</div>;
}
