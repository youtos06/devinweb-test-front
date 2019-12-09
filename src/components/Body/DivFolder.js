import React from "react";
import cat from "../../images/cat.jpg";

export default function DivFolder({ name, numberOfFiles }) {
  return (
    <div
      style={{
        height: 110,
        width: "30%",
        marginTop: 5,
        marginBottom: 10,
        marginLeft: "1%",
        marginRight: "2%",
        float: "left",
        backgroundColor: "white",
        borderRadius: 12
      }}
    >
      <span
        style={{
          fontSize: "2.5em",
          marginLeft: "15px",
          color: "#5964ff",
          float: "left",
          width: "60%"
        }}
      >
        <i className="fa fa-folder"></i>
      </span>
      <span style={{ width: "30%" }}>
        <img
          src={cat}
          alt="user-pic"
          style={{
            marginTop: 10,
            marginBottom: 5,
            height: 40,
            width: 40,
            border: "2px solid #5964ff",
            borderRadius: "100%"
          }}
        ></img>
      </span>
      <div style={{ paddingLeft: "20px", paddingTop: 10, paddingBottom: 10 }}>
        <h6 style={{ color: "#0B0B61", fontWeight: "500", fontSize: 15 }}>
          {name}
        </h6>
        <h6 style={{ color: "#BDBDBD", fontSize: 13, fontWeight: "500" }}>
          {numberOfFiles} files
        </h6>
      </div>
    </div>
  );
}
