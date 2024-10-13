// src/components/Header.js
import React from 'react';
import {Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">John Doe</Link> {/*  logo */}
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Accueil
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/services" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                 Me Contacter
              </NavLink>
            </li>
            <li>
              <NavLink to="/realisations" activeClassName="active">
                Réalisations
              </NavLink>
            </li>
            <li>
              <NavLink to="/legal" activeClassName="active">
                Mentions Légales
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

// Fonction pour le menu hamburger
const toggleMenu = () => {
  const nav = document.querySelector('.navigation');
  nav.classList.toggle('active');
};

export default Header;
