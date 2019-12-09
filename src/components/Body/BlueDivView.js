import React from "react";
import afterHover from "../../styles/afterHover.css";

export default function BlueDivView({ image, name, dataRe, dataDe }) {
  const barLength = (dataRe / dataDe) * 100 + "%";
  return (
    <div className="blue">
      <div className="containData" id="first" style={afterHover}>
        <>
          <img className="imageData" src={image} alt="datapics"></img>
          <span className="iconData">
            <i className="uil uil-ellipsis-h"></i>
          </span>
        </>

        <div className="spaceData">
          <h5>{name}</h5>
          <div
            style={{ width: "100%", margin: "auto", display: "inline-block" }}
          >
            <div style={{ marginBottom: 25 }}>
              <h6 style={{ float: "left" }}>{dataRe} GB</h6>
              <h6 style={{ float: "right" }}>{dataDe} GB</h6>
            </div>
            <div className="bareData">
              <div className="fillBareData" style={{ width: barLength }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
