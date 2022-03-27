import React from "react";
import { Link } from "react-router-dom";

const NavbarLanding = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark navbar-fixed-top"
      style={{ backgroundColor: "#6a02f1" }}
    >
      <div className="container-fluid container">
        <a className="navbar-brand" href="#">
          {/* <b>Navbar</b> */}
          <img
            src="./assets/img/logo.png"
            alt="logo"
            className="img-fluid mt-3"
            style={{ width: "200px", height: "150px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto my-1">
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#">
                Misión y visión
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#">
                Nosotros
              </a>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link active" aria-current="page" to="/news">
                Noticias
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLanding;
