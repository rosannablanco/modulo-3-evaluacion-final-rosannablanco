import React from 'react';
import logo from '../images/Rick_and_Morty_-_logo_(English).png';
import '../stylesheets/Header.css';

function Header() {
  return (
    <header className="Header">
      <img className="header-img" src={logo} alt="Rick and Morty" title="Rick and Morty" />
    </header>
  );
}

export default Header;
