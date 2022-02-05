import React from 'react'
import "./paymentsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { PaymentsData } from "../../dummyData6";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PaymentsList() {
  const [data, setData] = useState(PaymentsData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "order_id",
      headerName: "order_id",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.order_id}
          </div>
        );
      },
    },
    { field: "payment_type", headerName: "payment_type", width: 200 },
    {
      field: "payment_value",
      headerName: "payment_value",
      width: 120,
    },
    {
      field: "olist_orders_dataset.order_purchase_timestamp",
      headerName: "purchase_timestamp",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}