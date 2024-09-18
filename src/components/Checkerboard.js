import React, { useState } from 'react';
import './Checkers.css'; // Your stylish CSS file, of course!

export default function Checkerboard({ setMoveHistory }) { // Pass setMoveHistory as a prop
  const size = 8;
  const [board, setBoard] = useState(Array(size).fill(null).map(() => Array(size).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('<3'); // Start with Player <3!

  const handleClick = (row, col) => {
    if (board[row][col] !== null) {
      return;
    }

    const newBoard = board.map((r, rowIndex) =>
      r.map((square, colIndex) =>
        rowIndex === row && colIndex === col ? currentPlayer : square
      )
    );
    setBoard(newBoard);

    // Update the move history through the parent component
    setMoveHistory((prevMoves) => [
      ...prevMoves,
      `Player ${currentPlayer} moved to row ${row + 1}, col ${col + 1}`,
    ]);

    setCurrentPlayer(currentPlayer === '<3' ? 'O' : '<3');
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

      <div className="current-player">
        Current Player: {currentPlayer}
      </div>
    </div>
  );
}
