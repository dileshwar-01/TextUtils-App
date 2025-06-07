import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2"  style={{height:'30px',
              width:'30px'}}></div>
          </div> */}
          
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              onClick={()=>{props.togglemode()}}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            ></input>
            <label
              className="form-check-label"
              htlmfor="flexSwitchCheckDefault"
            >
              Toggle DarkMode
            </label>
          </div>
         
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = { 
  title: PropTypes.string, 
  about: PropTypes.string
 };
Navbar.defaultProps={
  title:'Set title here',
  about:'About'
};