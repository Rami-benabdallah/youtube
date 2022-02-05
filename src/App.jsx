import React from 'react'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SellersList from "./pages/sellersList/SellersList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Payments from "./pages/payments/Payments";
import OrdersList from "./pages/orders/OrdersList";
import ReviewsList from "./pages/reviews/ReviewsList"
import CustomersList from "./pages/customersList/CustomersList";
import PaymentsList from "./pages/paymentsList/PaymentsList";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/customers">
            <CustomersList />
          </Route>
          <Route path="/sellers">
            <SellersList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/pay">
            <Payments />
          </Route>
          <Route path="/payments">
            <PaymentsList />
          </Route>
          <Route path="/orders">
            <OrdersList />
          </Route>
          <Route path="/reviews">
            <ReviewsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;