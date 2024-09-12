import React, { useState } from 'react';
import './Checkers.css'; // Your stylish CSS file, of course!

export default function Checkerboard() {
  const size = 8;
  const [board, setBoard] = useState(Array(size).fill(null).map(() => Array(size).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('<3'); // Start with Player <3!
  const [moves, setMoves] = useState([]); // Track the moves

  const handleClick = (row, col) => {
    // If the square is already filled, we can't change it!
    if (board[row][col] !== null) {
      return;
    }

    // Create a new copy of the board with the updated move
    const newBoard = board.map((r, rowIndex) =>
      r.map((square, colIndex) =>
        rowIndex === row && colIndex === col ? currentPlayer : square
      )
    );

    // Update the board
    setBoard(newBoard);

    // Log the move with player and position (row, col)
    const newMove = {
      player: currentPlayer,
      position: [row, col]
    };
    setMoves([...moves, newMove]); // Add the move to the list

    // Switch to the other player
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

      {/* Move history section */}
      <div className="move-history">
        <h3>Move History</h3>
        <ul>
          {moves.map((move, index) => (
            <li key={index}>
              Player {move.player} moved to row {move.position[0] + 1}, col {move.position[1] + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
