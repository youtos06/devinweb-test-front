import React from "react";
import Table from "./Table";

export default function BottomDiv() {
  return (
    <div>
      <div style={{ width: "90%", margin: "auto", marginTop: 20 }}>
        <h4
          style={{
            fontWeight: "600",
            width: "85%",
            color: "#0B0B61",
            float: "left"
          }}
        >
          Recent Files
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
        <Table></Table>
      </div>
    </div>
  );
}
