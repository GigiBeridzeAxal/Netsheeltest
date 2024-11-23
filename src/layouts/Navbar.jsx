import React, { useState } from "react";
import "../assets/navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navshow, setNavshow] = useState(false);

  return (
    <div className="navbar-main-div-header">
      <div className="container nav-container-header">
        <div className="navbar-logo-div">
          <Link to="/">
            <img src="/img/logo.png" alt="Netseel Logo" />
          </Link>
          <button
            className="menu-btn"
            onClick={() => setNavshow((prevValue) => !prevValue)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className={`nav-links-div ${navshow ? "" : "hidden-nav"}`}>
          <ul className="nav-links-ul-header">
            <li>
              <NavLink to="/" className="nav-links-header">
                Home
                <hr className="nav-hr" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="nav-links-header">
                Portfolio
                <hr className="nav-hr" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="nav-links-header">
                Services
                <hr className="nav-hr" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-links-header">
                About Us
                <hr className="nav-hr" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`contact-button-div ${navshow ? "" : "hidden-nav"}`}>
          <NavLink to={"/contact"}  className="contact-button-header">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
