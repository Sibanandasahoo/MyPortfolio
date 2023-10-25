import React from 'react';
import '../css/Header.css';
import header_img from '../img/Portfolio-icon.webp'
function Header() {
  return (
    <header className="header">
      <img src={header_img} className='header-img' alt='my-portfolio'/>
      <h1 className="header-title">Sibananda Sahoo</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <a href="#about">About Me</a>
          </li>
          <li className="header-nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="header-nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
