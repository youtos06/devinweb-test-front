import React from "react";
import DataSet from "./Right/DataSet";

export default function RightBar({ data }) {
  let length =
    data.dataSetValue[0][4] +
    data.dataSetValue[1][4] +
    data.dataSetValue[2][4] +
    data.dataSetValue[3][4] +
    data.dataSetValue[4][4];
  return (
    <div>
      <div style={{ margin: 20 }}>
        <div style={{ height: "10%" }}>
          <h2
            style={{
              float: "left",
              fontWeight: "700",
              width: "70%",
              color: "#5964ff"
            }}
          >
            {data.dateRe} GB
          </h2>
          <h2
            style={{
              textAlign: "right",
              float: "right",
              fontWeight: "700",
              width: "30%",
              color: "#BDBDBD"
            }}
          >
            {data.dateDe} GB
          </h2>
        </div>
        <div>
          <h6
            style={{
              float: "left",
              fontWeight: "500",
              width: "70%",
              color: "#BDBDBD"
            }}
          >
            Used
          </h6>
          <h6
            style={{
              textAlign: "right",
              float: "right",
              fontWeight: "500",
              width: "30%",
              color: "#5964ff",
              cursor: "pointer"
            }}
          >
            Upgrade
          </h6>
        </div>
        {/* div*/}
        <div
          style={{
            marginTop: "25%",
            width: "100%",
            height: 8,
            backgroundColor: "#D8D8D8",
            borderRadius: 15
          }}
        >
          {data.dataSetValue.map(d => (
            <span>
              <div
                style={{
                  height: "100%",
                  backgroundColor: d[3],
                  width: (d[4] / length) * 100 + "%",
                  float: "left"
                }}
              ></div>
            </span>
          ))}
        </div>
        {/* div*/}
        {data.dataSetValue.map(data => (
          <DataSet
            key={data[0]}
            name={data[0]}
            files={data[1]}
            icon={data[2]}
            iconColor={data[3]}
            stockage={data[4]}
          ></DataSet>
        ))}
      </div>
    </div>
  );
}
