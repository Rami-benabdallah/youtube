import React from 'react'
import Chart from "../../components/charts/userchart/Chart";
import OrderChart from "../../components/charts/orderschart/OrderChart";
import OrdersMonthChart from "../../components/charts/ordersmonthchart/OrdersMonthChart";
import StatesMonthChart from "../../components/charts/statesmonthchart/StatesMonthChart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <OrdersMonthChart />
      <StatesMonthChart />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <OrderChart  />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}