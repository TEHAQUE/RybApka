import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Ryb-Apka
        </Link>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              Strona Główna
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/rezerwacje" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              Rezerwacje
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/feed" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              Aktualności
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/records" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              Rekordy
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              Panel Użytkownika
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/admin" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              Panel Administratora
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;