import React from "react";
import DivFolder from "./DivFolder";

export default function Mid() {
  const data = [
    ["Analytics", "15"],
    ["Assets", "345"],
    ["Merketing", "143"]
  ];
  return (
    <div
      style={{
        width: "100%",
        marginTop: 10,
        marginLeft: "10%",
        margin: "auto",
        height: "20%",
        display: "inline-block"
      }}
    >
      <div style={{ width: "90%", margin: "auto" }}>
        <h4
          style={{
            fontWeight: "600",
            width: "85%",
            color: "#0B0B61",
            float: "left"
          }}
        >
          Folders
        </h4>
        <h6
          style={{
            fontWeight: "500",
            color: "#5964ff",
            width: "15%",
            float: "right",
            marginBottom: "-4px",
            cursor: "pointer"
          }}
        >
          View all
        </h6>
        {data.map(d => (
          <DivFolder key={d[0]} name={d[0]} numberOfFiles={d[1]}></DivFolder>
        ))}
      </div>
    </div>
  );
}
