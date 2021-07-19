import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const AlertMsg = styled.p`
  color: ${({ isBad }) => (isBad ? "red" : "green")};
  margin: 5px 10px;
`;

function MessageForm() {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const phoneInput = useRef(null);
  const messageInput = useRef(null);
  const errorMessage = useRef(null);
  const successMessage = useRef(null);

  function clearAlerts() {
    errorMessage.current.innerText = null;
    successMessage.current.innerText = null;
  }

  function allValuesFilled() {
    return (
      nameInput.current.value &&
      emailInput.current.value &&
      phoneInput.current.value &&
      messageInput.current.value
    );
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function clearForm() {
    nameInput.current.value = null;
    emailInput.current.value = null;
    phoneInput.current.value = null;
    messageInput.current.value = null;
  }

  function sendMail(e) {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          successMessage.current.innerText = "Message sent successfully.";
        },
        (error) => {
          console.log(error);
          errorMessage.current.innerText =
            "Seems like there was an issue. Try again later.";
        }
      );
  }

  function sendMessage(e) {
    e.preventDefault();

    clearAlerts();

    if (!allValuesFilled()) {
      errorMessage.current.innerText =
        "* Make sure to fill out all parts of the form.";
    } else if (!validateEmail(emailInput.current.value)) {
      errorMessage.current.innerText = "* Please use a valid email.";
    } else {
      sendMail(e);
      clearForm();
    }
  }

  return (
    <div id="message">
      <h1 className="red-text">Send Message</h1>
      <AlertMsg ref={errorMessage} isBad={true}></AlertMsg>
      <AlertMsg ref={successMessage}></AlertMsg>
      <form>
        <fieldset>
          <div className="mb-3">
            <input
              type="text"
              className="form-control my-3"
              placeholder="Name"
              ref={nameInput}
            ></input>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Email"
              ref={emailInput}
            ></input>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Phone"
              ref={phoneInput}
            ></input>
            <textarea
              className="form-control my-3"
              placeholder="Message"
              rows="6"
              ref={messageInput}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn bg-red text-white"
            onClick={sendMessage}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default MessageForm;
