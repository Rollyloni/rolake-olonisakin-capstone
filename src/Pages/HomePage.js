import React from "react";
import "../Pages/HomePage.scss";
import { NavLink } from "react-router-dom";
import OrdersComponent from "../Components/OrdersComponent/OrdersComponent";
import { FaUserPlus, FaShoppingBag } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [orders, setOrders] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/orders").then((response) => {
      setOrders(response.data.length);
    });
  }, []);

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/customers").then((response) => {
      setCustomers(response.data.length);
    });
  }, []);

  return (
    <main>
      <section className="status__section">
        <h2>Dashboard</h2>
        <div className="btn">
          <NavLink to="orders/add-order" className="navlink">
            <span className="btn__new">+ New Order</span>
          </NavLink>
          <NavLink to="customers/add-customer" className="navlink">
            <span className="btn__add">+ New Customer</span>
          </NavLink>
        </div>
      </section>
      <section className="dashboard__card">
        <article className="dashboard__card--article">
          <div className="dashboard__card--container">
            <span>New Orders</span>

            <FaShoppingBag />
          </div>
          <p className="dashboard__card--number">{orders}</p>
          <p>This week</p>
        </article>
        <article className="dashboard__card--article">
          <div className="dashboard__card--container">
            <span>New Customers</span>
            <FaUserPlus />
          </div>
          <p className="dashboard__card--number">{customers}</p>
          <p>This week</p>
        </article>
      </section>
      <section>
        <article className="dashboard__orders">
          <h3 className="dashboard__orders--heading">Orders</h3>
          <span className="week">This week</span>
        </article>
      </section>
      <section>
        <article className="order__headings">
          <h4>Image</h4>
          <h4 className="style">Style</h4>
          <h4>Amount</h4>
          <h4>Status</h4>
          <h4>Delivery</h4>
        </article>
      </section>
      <OrdersComponent />
    </main>
  );
};

export default HomePage;
