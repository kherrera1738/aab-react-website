import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="header-container">
      <div id="trapezoid">
        <h1 className="text-white text-center fs-3 pt-3">
          Advanced Autobody &amp; Collision Repair
        </h1>
      </div>
      <div className="mobile-header">
        <h1 className="text-white text-center fs-3 pt-3">
          Advanced Autobody &amp; Collision Repair
        </h1>
      </div>
      <div className="container-fluid">
        <div className="info-headers">
          <h1 className="fs-2" id="telephone">
            TEL: 925-431-0522
          </h1>
          <h2 className="fs-5" id="address">
            620 Garcia Ave., Suite B. Pittsburg, CA 94565
          </h2>
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-dark bg-red">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link className="nav-link" to="/location">
                  LOCATION
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
