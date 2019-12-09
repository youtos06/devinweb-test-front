import React, { useState } from "react";
import _ from "lodash";
const Table = () => {
  const [sort, setSort] = useState(null);
  const [data, setData] = useState([
    {
      name: "Competetor Anlyse Template",
      members: "only you",
      lastModified: "Sep 9 ,2019",
      icon: "fa fa-file-text",
      color: "#FE2E2E"
    },
    {
      name: "How to create a case study",
      members: "3 members",
      lastModified: "Jul 12 ,2019",
      icon: "fa fa-file-text",
      color: "#5964ff"
    },
    {
      name: "Landing Page Structure",
      members: "2 members",
      lastModified: "Jul 17 ,2019",
      icon: "fa fa-file-text",
      color: "#5964ff"
    },
    {
      name: "Meeting Report",
      members: "5 members",
      lastModified: "Sep 9 ,2019",
      icon: "fa fa-file-text",
      color: "#FE2E2E"
    },
    {
      name: "Adding Data",
      members: "9 members",
      lastModified: "Sep 9 ,2019",
      icon: "fa fa-file-text",
      color: "#F4FA58"
    },
    {
      name: "Empty Data",
      members: "8 members",
      lastModified: "Sep 9 ,2019",
      icon: "fa fa-file-text",
      color: "#F4FA58"
    }
  ]);
  const onSort = variable => {
    let tempData = [...data];
    if (sort === "asc") {
      tempData = _.orderBy(tempData, [variable], ["desc"]);
      setData(tempData);
      setSort("desc");
    } else {
      tempData = _.orderBy(tempData, [variable], ["asc"]);
      setData(tempData);
      setSort("asc");
    }
  };
  return (
    <table
      className="table-borderless"
      style={{ border: "none", width: "100%" }}
    >
      <thead>
        <tr style={{ color: "#CC2EFA", fontSize: 15 }}>
          <th
            style={{ fontWeight: "300" }}
            onClick={() => onSort("name")}
            scope="col"
          >
            Name
          </th>
          <th
            style={{ fontWeight: "300" }}
            onClick={() => onSort("members")}
            scope="col"
          >
            Members
          </th>
          <th
            style={{ fontWeight: "300" }}
            onClick={() => onSort("last modified")}
            scope="col"
          >
            Last Modified
          </th>
          <th style={{ fontWeight: "300" }} scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {data.map(d => (
          <tr key={d.name}>
            <th
              style={{ paddingTop: 10, fontWeight: "400", color: "#0B0B61" }}
              scope="row"
            >
              <span style={{ fontSize: "1em", color: d.color, marginRight: 5 }}>
                <i className={d.icon}></i>
              </span>
              {d.name}
            </th>
            <td style={{ paddingTop: 10, fontWeight: "400", color: "#AC58FA" }}>
              {d.members}
            </td>
            <td style={{ paddingTop: 10, fontWeight: "400", color: "#AC58FA" }}>
              {d.lastModified}
            </td>
            <td style={{ paddingTop: 10, fontWeight: "400", color: "#AC58FA" }}>
              <span style={{ fontSize: "1.5em", color: "#AC58FA" }}>
                <i className="uil uil-ellipsis-h"></i>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
