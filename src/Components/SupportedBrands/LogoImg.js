import React from "react";

function LogoImg({ name, width }) {
  return (
    <img
      src={require("../../logo_imgs/resized/" + name + "_logo.png").default}
      alt={name}
      width={width}
      className="my-1"
    />
  );
}

export default LogoImg;
