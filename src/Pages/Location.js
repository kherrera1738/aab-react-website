import React from "react";
import MessageForm from "../Components/MessageForm";

function Locations() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-3">
        <div className="col-11 col-xl-10 col-xxl-8 px-0">
          <div id="map-container">
            <div>
              <h1 className="red-text">Our Address</h1>
              <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12575.43659213073!2d-121.8839794516951!3d38.00374573354779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80855be1f044aa27%3A0x7ae3a3d83f9a2ee6!2sAdvanced%20Auto%20Body%20%26%20Collision%20Repair%20Inc.!5e0!3m2!1sen!2sus!4v1624855831242!5m2!1sen!2sus"
                height="350"
                allowFullScreen=""
                loading="lazy"
                title="location"
              ></iframe>
              <p>
                Advanced Auto Body &#38; Collision Repair Inc. 620 Garcia Ave,
                Suite B Pittsburg, CA 94565
              </p>
              <p>E-mail: advancedautobody@comcast.net </p>
            </div>
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
