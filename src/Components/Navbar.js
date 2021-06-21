import React from 'react'

function Navbar() {
  return (
      <div id="header-container">
        <div id="trapezoid">
          <h1 class="text-white text-center fs-3 pt-3">
            Advanced Autobody &amp; Collision Repair
          </h1>
        </div>
        <div class="container-fluid">
          <div class="info-headers">
            <h1 class="fs-2 mt-4" id="telephone">TEL: 925-431-0522</h1>
            <h2 class="fs-5">620 Garcia Ave., Suite B. Pittsburg, CA 94565</h2>
          </div>
        </div>
        <nav class="navbar navbar-expand-md navbar-dark bg-red">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="mainNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item fs-5">
                  <a class="nav-link">HOME</a>
                </li>
                <li class="nav-item fs-5">
                  <a class="nav-link">ABOUT</a>
                </li>
                <li class="nav-item fs-5">
                  <a class="nav-link">LOCATION</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar
