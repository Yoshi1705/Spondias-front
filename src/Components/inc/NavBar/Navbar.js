import React from "react";
import { Link } from "react-router-dom";
import img from "./Img.png";
import "./Nav.css";

function Navbar() {
  const navlinks = [
    {
      to: "/",
      title: "HOME",
    },
    {
      to: "/about",
      title: "ABOUT",
    },
    {
      to: "/services",
      title: "SERVICES",
    },
    {
      to: "/clientProjects",
      title: "PROJECTS/CLIENTS",
    },
    {
      to: "/contact",
      title: "CONTACT",
    },
  ];
  const navbtn = (link, title) => {
    return (
      <li className="nav-item">
        <Link
          to={link}
          className="nav-link   nav-links"
          style={{ padding: "10px 0 10px 30px" }}
        >
          {title}
        </Link>
      </li>
    );
  };
  return (
    <nav className="navbar navbar-expand-lg" id="header">
      <div className="container d-flex  align-items-center">
        <img
          src={img}
          alt="Logo"
          style={{
            marginTop: "0",
            marginRight:'3px'
          }}
        />

        <h1 className="logo me-auto">
          <Link to="/" className="link">
            <span style={{ color: "#29a9e2" }}>SPon</span>
            <span>DIAS</span>
          </Link>
        </h1>

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

        <div
          className="collapse navbar-collapse align-items-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ml-auto">
            {navlinks.map((i) => {
              return navbtn(i.to, i.title);
            })}
          </ul>
        </div>
        
      </div>
      
    </nav>
  );
}

export default Navbar;
