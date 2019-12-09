import React from "react";
import SideNav from "./SideNav";
import cat from "../../images/cat.jpg";
export default function BlueSide() {
  return (
    <>
      <div style={{ height: "90%", width: "100%" }}>
        <div
          style={{
            margin: "auto",
            width: "100%",
            textAlign: "center",
            height: 100,
            marginBottom: 20
          }}
        >
          <a href="https://github.com/youtos06">
            <span style={{ fontSize: "3.5em", color: "white" }}>
              <i className="fa fa-github"></i>
            </span>
          </a>
        </div>
        <SideNav></SideNav>
      </div>
      <div
        style={{
          margin: "auto",
          width: "80%",
          padding: "auto",
          marginBottom: 10
        }}
      >
        <img
          src={cat}
          alt="user-pic"
          style={{
            height: "50px",
            width: 50,
            border: "2px solid white",
            borderRadius: "100%"
          }}
        ></img>
      </div>
    </>
  );
}
