import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-2 mb-6 ">
      <div className="container-fluid ">
        <a className="navbar-brand " href="/">
          Daa News
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/Sports">
              Sports
            </Link>
            <Link className="nav-link" to="/Health">
              Health
            </Link>
            <Link className="nav-link" to="/Science">
              Science
            </Link>
            <Link className="nav-link" to="/Business">
              Business
            </Link>
            <Link className="nav-link" to="/Entertainment">
              Entertainment
            </Link>
            <Link className="nav-link" to="/Technology">
              Technology
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
