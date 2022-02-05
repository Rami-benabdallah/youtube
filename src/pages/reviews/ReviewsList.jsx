import React from 'react'
import "./reviewsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReviewsData } from "../../dummyData5";

export default function ReviewsList() {
  const [data, setData] = useState(ReviewsData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "review_id",
      headerName: "review_id",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.review_id}
          </div>
        );
      },
    },
    { field: "order_id", headerName: "order_id", width: 200 },
    {
      field: "review_score",
      headerName: "review_score",
      width: 120,
    },
    {
      field: "review_creation_date",
      headerName: "review_creation_date",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/reviews/" + params.row.id}>
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