import React from "react";
import BlueSide from "./Left/BlueSide";
import UserSpace from "./Left/UserSpace";
import Bottom from "./Left/Bottom";

export default function LeftBar() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-3"
          style={{ backgroundColor: "#5964FF", height: "98vh" }}
        >
          <BlueSide></BlueSide>
        </div>
        <div className="col-9">
          <div style={{ width: "100%", borderBottom: "0.5px solid #CEE3F6" }}>
            <div
              style={{ paddingLeft: "20px", paddingTop: 10, paddingBottom: 10 }}
            >
              <h5 style={{ color: "#0B0B61", fontWeight: "600" }}>
                Marketing Team
              </h5>
              <h6 style={{ color: "#BDBDBD" }}>17 members</h6>
            </div>
          </div>
          <UserSpace></UserSpace>
          <Bottom></Bottom>
        </div>
      </div>
    </div>
  );
}
