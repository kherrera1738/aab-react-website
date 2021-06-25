import React from "react";

import Carousel from "../Components/Carousel";
import CardSection from "../Components/CardSection";
import ServicesReviews from "../Components/ServicesReviews";
import SupportedBrands from "../Components/SupportedBrands";

function Home() {
  return (
    <div>
      <Carousel />
      <CardSection />
      <ServicesReviews />
      <SupportedBrands />
    </div>
  );
}

export default Home;
