import React from 'react';
import './Footer.css'; // Link to your footer-specific CSS

export default function Footer() {
  return (
    <footer className="footer">
      <img src={require('./logo.jpeg')} alt="Rotating logo" className="rotating-image" />
    </footer>
  );
}
