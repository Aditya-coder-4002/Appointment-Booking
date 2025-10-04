
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Jivan</div>

      <nav className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <NavLink to="/" onClick={() => setIsMobile(false)} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMobile(false)} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" onClick={() => setIsMobile(false)} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      </nav>

      <div className="menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </div>
    </header>
  );
};

export default Navbar;
