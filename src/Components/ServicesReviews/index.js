import React, { useEffect } from "react";
import ServiceItem from "./ServiceItem";
import { SRContainer, ServicesContainer } from "./SRElements";
import { services } from "../../data";

function ServicesReviews() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.yelp.com/embed/widgets.js";
    script.async = true;

    if (document.getElementById("reviews") !== null) {
      document.getElementById("reviews").appendChild(script);
    }

    return () => {
      if (document.getElementById("reviews") !== null) {
        document.getElementById("reviews").appendChild(script);
      }
    };
  }, []);

  return (
    <SRContainer>
      <ServicesContainer className="px-3 mx-2 py-2 my-4 rounded-3">
        <h1 className="red-text">Our Services</h1>
        <ul>
          {services.map((text, index) => {
            return <ServiceItem item={text} key={index} />;
          })}
        </ul>
      </ServicesContainer>
      <ServicesContainer id="reviews" className="px-3 mx-2 py-2 my-4 rounded-3">
        <span
          className="yelp-review"
          data-review-id="JjqHmNzTNT7kXAfvgprBQQ"
          data-hostname="www.yelp.com"
        >
          Read
          <a
            href="https://www.yelp.com/user_details?userid=Bh5BlGuDzAMUeK7JKT5lfw"
            rel="nofollow noopener"
          >
            Eric S.
          </a>
          's
          <a
            href="https://www.yelp.com/biz/advanced-auto-body-pittsburg?hrid=JjqHmNzTNT7kXAfvgprBQQ"
            rel="nofollow noopener"
          >
            review
          </a>
          of
          <a
            href="https://www.yelp.com/biz/xjae4fLcD9S4GMvWPIWNnw"
            rel="nofollow noopener"
          >
            Advanced Auto Body
          </a>
          on
          <a href="https://www.yelp.com" rel="nofollow noopener">
            Yelp
          </a>
        </span>
      </ServicesContainer>
    </SRContainer>
  );
}

export default ServicesReviews;
