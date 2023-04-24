import React from "react";
import "../App.css";

const Banner = ({ title, buttonText, buttonLink }) => {
  return (
    <div className="banner">
      {title}
      <a href={buttonLink}>
          <button>{buttonText}</button>
        </a>
    </div>
  );
};

export default Banner;
