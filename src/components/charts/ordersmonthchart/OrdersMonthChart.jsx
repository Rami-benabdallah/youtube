import "./ordersMonthChart.css";
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
    name: "JAN",
    "2018": 7563,
    "2017": 850,
  },
  {
    name: "FEB",
    "2018": 6952,
    "2017": 1886,
  },
  {
    name: "MAR",
    "2018": 7512,
    "2017": 2837,
  },
  {
    name: "APR",
    "2018": 7209,
    "2017": 2571,
  },
  {
    name: "MAI",
    "2018": 7135,
    "2017": 3944,
  },
  {
    name: "JUN",
    "2018": 6419,
    "2017": 3436,
  },
  {
    name: "JUL",
    "2018": 6507,
    "2017": 4317,
  },
  {
    name: "AUG",
    "2018": 6698,
    "2017": 4550,
  },
  {
    name: "SEP",
    "2018": 16,
    "2017": 4516,
  },
  {
    name: "OCT",
    "2018": 4,
    "2017": 4860,
  },
  {
    name: "NOV",
    "2018": 0,
    "2017": 7863,
  },
  {
    name: "DEC",
    "2018": 0,
    "2017": 5895,
  },
];

export default function OrdersMonthChart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">Orders Monthly Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="2017"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="2018" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}