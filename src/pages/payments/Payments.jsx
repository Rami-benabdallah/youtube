import React from 'react'
import "./payments.css";
import ProductChart from "../../components/charts/productchart/ProductChart"
import { Pdata, ProductData, CustData } from "./data"
import Chart from '../../components/charts/productchart/Chart';
import CustChart from '../../components/charts/productchart/CustChart'

export default function payments() {
    return (
        <div className="payments">
            payments
            <CustChart data={CustData.data} title="Customer Analytics" />
            <ProductChart data={ProductData} title="Product Analytics"/>
            <Chart data={Pdata} title="User Analytics" grid dataKey={Pdata}/>
        </div>
    )
}

