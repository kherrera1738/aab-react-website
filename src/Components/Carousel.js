import React from "react";
import slide1 from "../Imgs/slide-1.jpg";
import slide2 from "../Imgs/slide-2.jpg";
import slide3 from "../Imgs/slide-3.jpg";
import slide4 from "../Imgs/slide-4.jpg";

function Carousel() {
  return (
    <div className="container-fluid" id="carousel">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10 col-xxl-8 px-0">
          <div
            id="carCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carCarousel"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slide1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slide2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slide3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slide4} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
