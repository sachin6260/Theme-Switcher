import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <style>
        {`
          .navbar {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            background-color: #16423C;
            color: #E9EFEC;
          }

          .nav-links {
            display: flex;
            align-items: center;
          }

          .nav-link {
            color: #E9EFEC;
            text-decoration: none;
            margin-right: 20px;
            font-size: 1.2rem;
          }

          .nav-link:last-child {
            margin-right: 0;
          }

          .nav-link:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
