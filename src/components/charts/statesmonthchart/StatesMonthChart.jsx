import "./statesMonthChart.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "SP",
    "Number of Customers": 41746,
    "Number of Sellers": 1849,
  },
  {
    name: "RJ",
    "Number of Customers": 12852,
    "Number of Sellers": 171,
  },
  {
    name: "MG",
    "Number of Customers": 11635,
    "Number of Sellers": 244,
  },
  {
    name: "RS",
    "Number of Customers": 5466,
    "Number of Sellers": 129,
  },
  {
    name: "PR",
    "Number of Customers": 5045,
    "Number of Sellers": 349,
  },
  {
    name: "SC",
    "Number of Customers": 3637,
    "Number of Sellers": 190,
  },
  {
    name: "BA",
    "Number of Customers": 3380,
    "Number of Sellers": 19,
  },
  {
    name: "DF",
    "Number of Customers": 2140,
    "Number of Sellers": 30,
  },
  {
    name: "ES",
    "Number of Customers": 2033,
    "Number of Sellers": 23,
  },
  {
    name: "GO",
    "Number of Customers": 2020,
    "Number of Sellers": 40,
  },
  {
    name: "PE",
    "Number of Customers": 1652,
    "Number of Sellers": 9,
  },
  {
    name: "CE",
    "Number of Customers": 1336,
    "Number of Sellers": 13,
  },
];

export default function StatesMonthChart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">Customers and Sellers States Monthly Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Number of Sellers"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Number of Customers" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}