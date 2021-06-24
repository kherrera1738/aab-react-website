import React from "react";
import { SBContainer, ImgsContainer } from "./SBElements";
import LogoImg from "./LogoImg";
import { logos } from "../../data";

function SupportedBrands() {
  return (
    <SBContainer>
      <h1 className="red-text mx-4">Supported Brands</h1>
      <ImgsContainer className="py-3 my-2 rounded-3">
        {logos.map((logo, index) => {
          return <LogoImg key={index} name={logo.name} width={logo.width} />;
        })}
      </ImgsContainer>
    </SBContainer>
  );
}

export default SupportedBrands;
