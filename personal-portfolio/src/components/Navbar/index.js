import React from "react";
import { Link } from "react-router-dom";
import sunset from "./sunset.jpg";

function Navbar(props) {
  return (
    <div className="container-fluid" id="nav">
      <section
        className="jumbotron jumbotron-fluid"
        style={{ backgroundImage: `url(${sunset})` }}
      >
        <div className="container">
          <h1 className="display-4">I am Emily Carlisle</h1>
          <p className="lead">Junior Full Stack Web Developer</p>
        </div>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => props.handlePageChange("")}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={
                  window.location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/more"
                className={
                  window.location.pathname === "/more"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                More
              </Link>
            </li>
          </ul>
        </div>

      </section>
    </div>
  );
}

export default Navbar;
