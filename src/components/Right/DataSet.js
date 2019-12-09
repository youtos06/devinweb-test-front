import React from "react";

export default function DataSet({ name, files, icon, iconColor, stockage }) {
  return (
    <div style={{ height: 60, marginTop: 10 }}>
      <span
        style={{
          backgroundColor: "rgb(241, 241, 247)",
          width: 50,
          height: 50,
          paddingTop: 10,
          borderRadius: 11,
          float: "left",
          fontSize: "1.2em",
          color: iconColor,
          marginTop: "5%",
          textAlign: "center"
        }}
      >
        <i className={icon}></i>
      </span>
      <div
        style={{
          float: "left",
          marginLeft: 10,
          marginTop: "5%"
        }}
      >
        <h5 style={{ color: "#0B0B61", fontWeight: "500", fontSize: 17 }}>
          {name}
        </h5>
        <h6 style={{ color: "#BDBDBD", fontSize: 13, fontWeight: "500" }}>
          {files} files
        </h6>
      </div>
      <div style={{ float: "right", textAlign: "right" }}>
        <h4
          style={{
            marginTop: 20,
            float: "left",
            fontWeight: "500",

            color: "#5964ff"
          }}
        >
          {stockage} GB
        </h4>
      </div>
    </div>
  );
}
