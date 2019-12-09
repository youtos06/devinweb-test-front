import React from "react";

export default function Search() {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          width: "90%",
          height: 35,
          paddingLeft: 10,
          margin: "auto",
          marginTop: 12
        }}
      >
        <form className="form-inline md-form form-sm mt-0">
          <span style={{ color: "#5964FF" }}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <input
            style={{ border: 0, fontSize: 20 }}
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Searching for PFE ..."
            aria-label="Search"
          />
        </form>
      </div>
    </>
  );
}
