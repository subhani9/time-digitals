import React from "react";
import HeaderLogo from "../../assets/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={HeaderLogo} alt="logo-header" className="header-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <MdMenu />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-icons">
              <li className="nav-item">
                <a href="/" target="_blank" className="navicons">
                  <FaInstagram />
                </a>
              </li>
              <li className="nav-item">
                <a href="/" target="_blank" className="navicons">
                  <FaTwitter />
                </a>
              </li>
              <li className="nav-item">
                <a href="/" target="_blank" className="navicons">
                  <FaLinkedin />
                </a>
              </li>
            </ul>

            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-btn">
              <a href="https://wa.me/9391069394" target="_blank">
                <button type="button" className="btn talk">
                  Let's Talk
                </button>
              </a>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
