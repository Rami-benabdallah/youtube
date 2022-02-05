import React from 'react'
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { ProductsData } from "../../dummyData3";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(ProductsData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product_id",
      headerName: "product_id",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.product_id}
          </div>
        );
      },
    },
    { field: "seller_id", headerName: "seller_id", width: 200 },
    {
      field: "product_category_ENG",
      headerName: "product_category_ENG",
      width: 120,
    },
    {
      field: "price",
      headerName: "price",
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
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}