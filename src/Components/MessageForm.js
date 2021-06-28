import React, { useRef } from "react";

function MessageForm() {
  return (
    <div id="message">
      <h1 className="red-text">Send Message</h1>
      <form>
        <fieldset>
          <div className="mb-3">
            <input
              type="text"
              className="form-control my-3"
              placeholder="Name"
            ></input>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Email"
            ></input>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Phone"
            ></input>
            <textarea
              className="form-control my-3"
              placeholder="Message"
              rows="6"
            ></textarea>
          </div>
          <button type="submit" className="btn bg-red text-white">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default MessageForm;
