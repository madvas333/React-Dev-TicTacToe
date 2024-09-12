import React from 'react';
import Checkerboard from './Checkerboard'; // Import your new Checkerboard component
import './Checkers.css'; // If you have specific styles for this page

export default function Checkers() {
  return (
    <div className="checkers-page">
      <h1>Checkers Game</h1>
      <Checkerboard />
      
      {/* Add a footer here */}
      <footer>
        Fabulous Footer Content!
      </footer>
    </div>
  );
}
