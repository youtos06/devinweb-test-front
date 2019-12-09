import React, { useState } from "react";

export default function UserSpace() {
  const files = [
    "Analytics",
    "Assets",
    "MarKeting",
    "Templates",
    "Projects",
    "Projector Cources"
  ];
  const [fileState, setFileState] = useState("none");
  const showOrHideFiles = e => {
    e.currentTarget.style.color = "#5964ff";
    if (fileState === "none") {
      setFileState("block");
    } else {
      setFileState("none");
    }
  };
  return (
    <div style={{ marginLeft: "20px", height: "51%" }}>
      <h4 style={{ fontWeight: "600", color: "#0B0B61" }}>Storage</h4>
      <h5
        style={{
          cursor: "pointer",
          fontWeight: "300",
          marginBottom: "10px",
          color: "#210B61"
        }}
        onClick={showOrHideFiles}
      >
        My Files <sup>(click me) </sup>
      </h5>
      <div
        className="files"
        style={{ paddingLeft: "20px", display: fileState }}
      >
        {files.map(f => (
          <p key={f} style={{ marginTop: "-8px", color: "#210B61" }}>
            <span style={{ color: "#848484" }}>
              <i className="fa fa-caret-right"></i>
            </span>
            <span> </span>
            <span style={{ color: "#BDBDBD" }}>
              <i className="fa fa-folder"></i>
            </span>
            <span> </span>

            {"   " + f}
          </p>
        ))}
      </div>
      <h5
        style={{
          cursor: "pointer",
          fontWeight: "300",
          marginBottom: "10px",
          color: "#210B61"
        }}
        onClick={e => {
          e.currentTarget.style.color = "#5964ff";
        }}
      >
        Shared with me
      </h5>
      <h5
        style={{
          cursor: "pointer",
          fontWeight: "300",
          marginBottom: "10px",
          color: "#210B61"
        }}
        onClick={e => {
          e.currentTarget.style.color = "#5964ff";
        }}
      >
        Recent
      </h5>
      <h5
        style={{
          cursor: "pointer",
          fontWeight: "300",
          marginBottom: "10px",
          color: "#210B61"
        }}
        onClick={e => {
          e.currentTarget.style.color = "#5964ff";
        }}
      >
        Starred
      </h5>
      <h5
        style={{
          cursor: "pointer",
          fontWeight: "300",
          marginBottom: "10px",
          color: "#210B61"
        }}
        onClick={e => {
          e.currentTarget.style.color = "#5964ff";
        }}
      >
        Trash
      </h5>
    </div>
  );
}
