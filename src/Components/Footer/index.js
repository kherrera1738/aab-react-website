import React from "react";
import { FooterContainer } from "./FooterElements";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <Link to="/" className="footer-link">
        Home
      </Link>
      <Link to="/about" className="footer-link">
        About
      </Link>
      <Link to="/location" className="footer-link">
        Location
      </Link>
    </FooterContainer>
  );
}

export default Footer;
