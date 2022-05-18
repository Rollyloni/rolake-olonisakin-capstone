import React from "react";
import "../Pages/HomePage.scss";
import OrdersComponent from "../Components/OrdersComponent/OrdersComponent";
import { FaUserPlus, FaShoppingBag } from "react-icons/fa";

const HomePage = () => {
  return (
    <main>
      <section className="status__section">
        <h2>Dashboard</h2>
        <div className="btn">
          <span className="btn__new">+ New Order</span>
          <span className="btn__add">+ New Customer</span>
        </div>
      </section>
      <section className="dashboard__card">
        <article className="dashboard__card--article">
          <div className="dashboard__card--container">
            <span>New Orders</span>
            <FaShoppingBag />
            {/* <img
              src={bagIcon}
              alt="bag Icon"
              className="dashboard__card--icon"
            /> */}
          </div>
          <p className="dashboard__card--number">32</p>
          <p>This week</p>
        </article>
        <article className="dashboard__card--article">
          <div className="dashboard__card--container">
            <span>New Customers</span>
            {/* <img
              src={personIcon}
              alt="bag Icon"
              className="dashboard__card--icon"
            /> */}
            <FaUserPlus />
          </div>
          <p className="dashboard__card--number">4</p>
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
          <h4>Style</h4>
          <h4>Amount</h4>
          <h4>Status</h4>
          <h4>Delivery Date</h4>
        </article>
      </section>
      <OrdersComponent />
    </main>
  );
};

export default HomePage;
