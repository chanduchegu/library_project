import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../node_modules/fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-1">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
