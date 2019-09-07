import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-2">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
