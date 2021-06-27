import React from "react";

function About() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-3">
        <div className="col-11 col-xl-10 col-xxl-8 px-0">
          <div id="about" className="me-3 mb-2">
            <h3 className="red-text">LONG-TERM BUISNESS</h3>
            <img
              src={require("../Imgs/about_img.jpg").default}
              alt="about"
            ></img>
          </div>
          <p className="mt-5">
            At Advanced Auto Body &#38; Collision Repair Inc. What makes us who
            we are is the passion and the experience of every one on our team.
            We are a complete auto body shop fully equipped with the latest
            technology in the industry and a computerized paint color matching
            system from PPG, one of the leaders in automotive paint in the
            world. Our company opened in 2012, since then we have experienced
            steady growth in the business and popularity among our customers and
            their friends. We are a family owned and operated company with a new
            approach towards our customers, having the idea of changing the
            experience and the way people think about Auto Body Repair Shops.
            Exceptional customer service, safety, and quality repairs in a
            timely manner is our priority. We understand choosing the right
            collision repair shop to fix your car is not an easy task. That
            being said, our vast experience and knowledge in the field goes back
            decades ago giving us the ability to meet or exceed your
            expectations, that is why our commitment to you is customer
            satisfaction. We stand behind our quality work with a 100%
            workmanship warranty.
          </p>
          <p>
            Helping our customer is more than getting their car back to
            pre-accident condition with a quality dealer-factory repair. That is
            only part of the standard procedure. We know accidents happen when
            least expected, and with that comes the financial burden of either
            paying out pocket or through a claim with your insurance company.
            Since it is still a vehicle owner’s obligation to pay for the
            deductible, we offer our customers fair discounts to help minimize
            their share of the cost. With us you will receive 10% off your
            estimate, up to $500.00. These discounts are applied toward your
            deductible, so you can fix your car with little or no money out of
            your pocket.
          </p>
          <div id="mission" className="px-3 py-4 mb-3">
            <h3 className="red-text">Our Mission</h3>
            <p>
              Advanced Auto Body &#38; Collision Repair Inc. is dedicated to
              providing high quality auto body repair service without the
              typical high cost of a big corporate auto body shop. We believe we
              are an alternative for anybody going through the unexpected,
              confusing, and stressful process of repairing their car, along
              with dealing with the monetary burden that comes as well. Whether
              the repair is handled through an insurance company or by our
              customers themselves, we commit ourselves to assist in keeping the
              finical part of our client's costs reasonable to the minimum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
