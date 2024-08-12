import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Make sure the correct CSS file is linked

export default function NavBar() {
  return (
    <nav className="navbar"> {/* Apply the navbar class here */}
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Checkers">Checkers</Link>
        </li>
        <li className="navbar-item">
          <Link to="/TicTacToe">Tic-Tac-Toe</Link>
        </li>
      </ul>
    </nav>
  );
}
