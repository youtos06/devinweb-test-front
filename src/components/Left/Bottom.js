import React from "react";

export default function Bottom() {
  let list = [
    ["Text Doc", "uil uil-file-alt"],
    ["Presentation", "uil uil-rss-interface"],
    ["Sheets", "uil uil-abacus"],
    ["More", "uil uil-ellipsis-h"]
  ];

  return (
    <>
      <div
        style={{
          margin: 7,
          marginTop: 20,
          borderRadius: 12,
          backgroundColor: "#F6F8FC",
          width: "100%"
        }}
      >
        <div
          style={{
            width: "100%",
            paddingLeft: 20,
            paddingTop: 10,
            borderBottom: "0.5px solid #CEE3F6"
          }}
        >
          <h5 style={{ color: "#0B0B61", fontWeight: "600" }}>
            <i className="uil uil-folder"></i>
            <span> </span>
            Folder
          </h5>

          <div style={{ padingLeft: 20 }}>
            {list.map(item => (
              <div key={item[0]}>
                <div style={{ width: "80%", float: "left" }}>
                  <p style={{ color: "#210B61", marginTop: 2 }}>
                    <span style={{ color: "#848484" }}>
                      <i className={item[1]}></i>
                    </span>
                    <span> </span>

                    {"   " + item[0]}
                  </p>
                </div>
                <div style={{ float: "left" }}>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        style={{
          margin: 5,
          paddingLeft: 20,
          backgroundColor: "#5964FF",
          borderRadius: 12,
          border: "1px solid #F6F8FC",
          padding: "auto",
          width: "100%",
          height: 50
        }}
      >
        <div
          style={{
            height: "100%",
            width: "80%",
            float: "left",
            textAlign: "center",
            marginTop: 7
          }}
        >
          <h5
            style={{
              color: "white",
              fontWeight: "600",
              height: 50,
              textAlign: "center",
              margin: "auto"
            }}
          >
            Create new
          </h5>
        </div>

        <div style={{ textAlign: "center", marginTop: 4 }}>
          <h3
            style={{
              height: 40,
              float: "left",
              width: 40,
              backgroundColor: "#58ACFA",
              padding: "auto",
              margin: "auto",
              color: "white",
              fontWeight: "600",
              borderRadius: 12
            }}
          >
            +
          </h3>
        </div>
      </button>
    </>
  );
}
