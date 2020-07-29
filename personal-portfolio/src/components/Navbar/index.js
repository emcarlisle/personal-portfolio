import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="container-fluid" id="nav">
      <section className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">I am Emily Carlisle</h1>
          <p className="lead">Full Stack Web Developer</p>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        </nav>
      </section>
    </div>
  );
}


export default Navbar;
