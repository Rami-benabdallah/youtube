import React from 'react'
import "./ordersList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { OrdersData } from "../../dummyData4"


export default function SellersList() {
  const [data, setData] = useState(OrdersData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "order_id",
      headerName: "order_id",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.order_id}
          </div>
        );
      },
    },
    { field: "product_id", headerName: "product_id", width: 200 },
    {
      field: "seller_id",
      headerName: "seller_id",
      width: 120,
    },
    {
      field: "price",
      headerName: "price",
      width: 160,
    },
    {
      field: "shipping_limit_date",
      headerName: "shipping_limit_date",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row.id}>
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