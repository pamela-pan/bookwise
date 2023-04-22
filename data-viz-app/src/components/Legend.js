import React from "react";
import bookIcon from "../img/icon-green-dot.png";
import misinfoIcon from "../img/icon-red-tri.png";
import "../App.css";

const Legend = () => {
  return (

    <div className="legend-box">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={bookIcon}
          alt="Book Icon"
          style={{ height: "30px", marginRight: "10px" }}
        />
        <span style={{ fontWeight: "bold" }}>Book</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <img
          src={misinfoIcon}
          alt="Misinformation Icon"
          style={{ height: "30px", marginRight: "10px" }}
        />
        <span style={{ fontWeight: "bold" }}>Misinformation</span>
      </div>
    </div>
  );
};

export default Legend;
