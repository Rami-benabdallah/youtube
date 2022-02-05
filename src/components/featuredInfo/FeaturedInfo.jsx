import React from 'react'
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Customers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1000</span>
          <span className="featuredMoneyRate">
            +25 <ArrowUpward  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to yesterday</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sellers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">200</span>
          <span className="featuredMoneyRate">
            -2 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to yesterday</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1000</span>
          <span className="featuredMoneyRate">
            +50 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to yesterday</span>
      </div>
    </div>
  );
}