import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import LeftBar from "./components/LeftBar";
import BodyPart from "./components/BodyPart";
import RightBar from "./components/RightBar";
import Search from "./components/Body/Search";
import NormalDivView from "./components/Body/NormalDivView";
import drive from "./images/drive.png";
import dropBox from "./images/dropBox.jpg";
import oneDrive from "./images/oneDrive.jpg";
import BlueDivView from "./components/Body/BlueDivView";

function App() {
  const [data, setData] = useState({
    dateRe: 45.5,
    dateDe: 50,
    dataSetValue: [
      ["Images", "1700", "fa fa-image", "#5964ff", 15.3],
      ["Documents", "163", "fa fa-file", "#FA58AC", 1],
      ["Media Files", "13", "fa fa-youtube-play", "#FE2E2E", 2.3],
      ["Other FIles", "145", "fa fa-floppy-o", "#D7DF01", 10],
      ["Media Files", "13", "fa fa-scissors", "#D8D8D8", 5]
    ]
  });
  const [files, setFiles] = useState([
    [
      [0, 0],
      drive,
      "Google Drive",
      45.5,
      50,
      {
        dateRe: 45.5,
        dateDe: 50,
        dataSetValue: [
          ["Images", "1700", "fa fa-image", "#5964ff", 15.3],
          ["Documents", "163", "fa fa-file", "#FA58AC", 1],
          ["Media Files", "13", "fa fa-youtube-play", "#FE2E2E", 2.3],
          ["Other FIles", "145", "fa fa-floppy-o", "#D7DF01", 10],
          ["Media Files", "13", "fa fa-scissors", "#D8D8D8", 5]
        ]
      }
    ],
    [
      [0, 1],
      dropBox,
      "Drop Box",
      1.3,
      3,
      {
        dateRe: 1.3,
        dateDe: 3,
        dataSetValue: [
          ["Images", "10", "fa fa-image", "#5964ff", 0.3],
          ["Documents", "16", "fa fa-file", "#FA58AC", 0.9],
          ["Media Files", "0", "fa fa-youtube-play", "#FE2E2E", 0],
          ["Other FIles", "5", "fa fa-floppy-o", "#D7DF01", 0.1],
          ["Media Files", "0", "fa fa-scissors", "#D8D8D8", 0]
        ]
      }
    ],
    [
      [0, 2],
      oneDrive,
      "One Drive",
      2.5,
      3,
      {
        dateRe: 2.5,
        dateDe: 3,
        dataSetValue: [
          ["Images", "1700", "fa fa-image", "#5964ff", 1.3],
          ["Documents", "163", "fa fa-file", "#FA58AC", 0.2],
          ["Media Files", "13", "fa fa-youtube-play", "#FE2E2E", 1],
          ["Other FIles", "145", "fa fa-floppy-o", "#D7DF01", 0],
          ["Media Files", "13", "fa fa-scissors", "#D8D8D8", 0]
        ]
      }
    ]
  ]);

  const changeType = e => {
    let tempFiles = [...files];
    let index = e.currentTarget.id;
    tempFiles[index][0][0] = 1;
    setFiles(tempFiles);
  };
  const changeBack = e => {
    let tempFiles = [...files];
    let index = e.currentTarget.id;
    tempFiles[index][0][0] = 0;
    setFiles(tempFiles);
  };
  const sendData = e => {
    let tempData = { ...data };
    let index = e.currentTarget.id;
    tempData = files[index][5];
    setData(tempData);
  };

  return (
    <div
      className="row"
      style={{
        margin: 10,
        width: 1550,
        height: 700,
        borderRadius: 12
      }}
    >
      <div className="col-3" style={{ height: "98vh" }}>
        <LeftBar></LeftBar>
      </div>
      <div
        className="col-6"
        style={{ backgroundColor: "#F6F8FC", height: "98vh" }}
      >
        <Search></Search>
        <div style={{ width: "90%", height: 200, margin: "auto" }}>
          {files.map(file =>
            file[0][0] === 0 ? (
              <div
                onMouseOver={changeType}
                onMouseLeave={changeBack}
                key={file[0][1]}
                id={file[0][1]}
              >
                <NormalDivView
                  image={file[1]}
                  name={file[2]}
                  dataRe={file[3]}
                  dataDe={file[4]}
                ></NormalDivView>
              </div>
            ) : (
              <div
                onMouseOver={changeType}
                onMouseOut={changeBack}
                onClick={sendData}
                id={file[0][1]}
                key={file[0][1]}
              >
                <BlueDivView
                  image={file[1]}
                  name={file[2]}
                  dataRe={file[3]}
                  dataDe={file[4]}
                ></BlueDivView>
              </div>
            )
          )}
        </div>
        <BodyPart></BodyPart>
      </div>
      <div className="col-3" style={{ height: "98vh" }}>
        <RightBar data={data}></RightBar>
      </div>
    </div>
  );
}

export default App;
