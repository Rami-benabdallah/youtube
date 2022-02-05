import React from 'react'
import "./customersList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { customersData } from "../../dummyData2";

export default function CustomersList() {
  const [data, setData] = useState(customersData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "customer_id",
      headerName: "customer_id",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.customer_id}
          </div>
        );
      },
    },
    { field: "customer_city", headerName: "customer_city", width: 200 },
    {
      field: "customer_state",
      headerName: "customer_state",
      width: 120,
    },
    {
      field: "customer_zip_code_prefix",
      headerName: "customer_zip_code_prefix",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/customer/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}