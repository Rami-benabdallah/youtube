import React from 'react'
import "./productChart.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useCallback } from "react";



export default function CustChart({title, data}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = data[activeIndex];
  
    const handleClick = useCallback(
      (entry, index) => {
        setActiveIndex(index);
      },
      [setActiveIndex]
    );

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
            <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv" onClick={handleClick}>
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              key={`cell-${index}`}
            />
                    ))}
                 </Bar>
                </BarChart>
            </ResponsiveContainer>
            <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>

        </div>
    )
}
