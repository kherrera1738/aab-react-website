import React from 'react'
import slide1 from '../Imgs/slide-1.jpg';
import slide2 from '../Imgs/slide-2.jpg';
import slide3 from '../Imgs/slide-3.jpg';
import slide4 from '../Imgs/slide-4.jpg';

function Carousel() {
  return (
      <div class="container-fluid">
        <div class="row justify-content-center mt-3">
          <div class="col-12 col-xl-10 col-xxl-8 px-0">
            <div id="carCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carCarousel"
                  data-bs-slide-to="0"
                  class="active"
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

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={slide1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={slide2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={slide3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={slide4} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carCarousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carCarousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Carousel
