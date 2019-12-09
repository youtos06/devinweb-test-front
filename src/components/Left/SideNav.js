import React from "react";

export default function SideNav() {
  const addStyle = e => {
    e.currentTarget.style.borderLeft = "4px solid white";
    e.currentTarget.style.backgroundColor = "#642EFE";
  };
  const backToNorma = e => {
    e.currentTarget.style.border = "none";
    e.currentTarget.style.backgroundColor = "#5964ff";
  };
  return (
    <>
      <div
        onMouseOver={addStyle}
        onMouseLeave={backToNorma}
        style={{
          width: "100%",
          textAlign: "center",

          padding: "auto",
          paddingTop: 5,
          height: "50px",
          marginBottom: 10,
          marginTop: 10
        }}
      >
        <span style={{ fontSize: "1.5em", color: "white" }}>
          <i className="uil uil-copy-alt"></i>
        </span>
      </div>

      <div
        onMouseOver={addStyle}
        onMouseLeave={backToNorma}
        style={{
          width: "100%",
          textAlign: "center",
          padding: "auto",
          paddingTop: 5,
          height: "50px",
          marginBottom: 10,
          marginTop: 10
        }}
      >
        <span style={{ fontSize: "1.5em", color: "white" }}>
          <i className="uil uil-comment"></i>
        </span>
      </div>

      <div
        onMouseOver={addStyle}
        onMouseLeave={backToNorma}
        style={{
          width: "100%",
          textAlign: "center",

          padding: "auto",
          paddingTop: 5,
          height: "50px",
          marginBottom: 10,
          marginTop: 10
        }}
      >
        <span style={{ fontSize: "1.5em", color: "white" }}>
          <i className="uil uil-user-times"></i>
        </span>
      </div>
      <div
        onMouseOver={addStyle}
        onMouseLeave={backToNorma}
        style={{
          width: "100%",
          textAlign: "center",

          padding: "auto",
          paddingTop: 5,
          height: "50px",
          marginBottom: 10,
          marginTop: 10
        }}
      >
        <span style={{ fontSize: "1.5em", color: "white" }}>
          <i className="uil uil-graph-bar"></i>
        </span>
      </div>
      <div
        onMouseOver={addStyle}
        onMouseLeave={backToNorma}
        style={{
          width: "100%",
          textAlign: "center",

          padding: "auto",
          paddingTop: 5,
          height: "50px",
          marginBottom: 10,
          marginTop: 10
        }}
      >
        <span style={{ fontSize: "1.5em", color: "white" }}>
          <i className="uil uil-cog"></i>
        </span>
      </div>
    </>
  );
}
