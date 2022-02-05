import React from 'react'
import "./sellersList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SellersData } from "../../dummyData2"

export default function SellersList() {
  const [data, setData] = useState(SellersData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "seller_id",
      headerName: "seller_id",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.seller_id}
          </div>
        );
      },
    },
    { field: "seller_zip_code_prefix", headerName: "seller_zip_code_prefix", width: 200 },
    {
      field: "seller_city",
      headerName: "seller_city",
      width: 120,
    },
    {
      field: "seller_state",
      headerName: "seller_state",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/seller/" + params.row.id}>
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