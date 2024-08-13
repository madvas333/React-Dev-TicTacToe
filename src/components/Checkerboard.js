import React, { useState } from 'react';
import './Checkers.css'; // Your stylish CSS file, of course!

export default function Checkerboard() {
  const size = 8;
  const [board, setBoard] = useState(Array(size).fill(null).map(() => Array(size).fill(null)));
  
  const handleClick = (row, col) => {
    // Just a basic example: toggle the square's color between 'X' and 'O'
    const newBoard = board.map((r, rowIndex) =>
      r.map((square, colIndex) =>
        rowIndex === row && colIndex === col ? (square === '<3' ? 'O' : '<3') : square
      )
    );
    setBoard(newBoard);
  };

  return (
    <div className="checkerboard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((square, colIndex) => {
            const isBlack = (rowIndex + colIndex) % 2 === 1;
            return (
              <div 
                key={`${rowIndex}-${colIndex}`} 
                className={`square ${isBlack ? 'black' : 'white'}`}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {square}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
