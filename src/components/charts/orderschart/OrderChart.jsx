import "./orderChart.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "2016",
    "Number of orders": 312,
  },
  {
    name: "2017",
    "Number of orders": 43580,
  },
  {
    name: "2018",
    "Number of orders": 54771,
  },
  {
    name: "2019",
    "Number of orders": 0,
  },
  {
    name: "2020",
    "Number of orders": 3,

  },

];
const data1 = [
  {
    name: "1",
    "Number of Reviews": 11424,
  },
  {
    name: "2",
    "Number of Reviews": 3151,
  },
  {
    name: "3",
    "Number of Reviews": 8179,
  },
  {
    name: "4",
    "Number of Reviews": 19142,
  },
  {
    name: "5",
    "Number of Reviews": 57328,

  },

];

export default function OrderChart() {
  return (
    <div className="orders">
    <div className="chart">
      <h3 className="chartTitle">Orders analytics</h3>
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            barSize={20}
            >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Number of orders" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
    </div>
    <div className="chart">
      <h3 className="chartTitle">Reviews Analytics</h3>
        <BarChart
              width={500}
              height={300}
              data={data1}
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
              }}
              barSize={20}
              >
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="Number of Reviews" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
    </div>
    </div>
  );
}
