import React from "react";
import siteLogo from "../assets/Group 2.png";
import editIcon from "../assets/Edit.jpg";
import trashCan from "../assets/trash-alt.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import uniqid from "uniqid";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/orders").then((response) => {
      setOrders(response.data);
    });
  }, [orders]);

  return (
    <main className="test">
      <article className="dashboard__orders detail head">
        <h3 className="dashboard__orders--heading">Orders</h3>
        {/* <span className="btn__add">Most sell</span> */}
        <NavLink to="orders/add-order" className="navlink">
          <span className="btn__new ">+ New Order</span>
        </NavLink>
      </article>
      <article className="order__headings detail">
        <h4>No</h4>
        <h4 className="style">Image</h4>
        <h4>Style</h4>
        <h4 className="styled">Amount</h4>
        <h4 className="styled">Status</h4>
        <h4 className="styled">Delivery Date</h4>
        <h4>Payment</h4>
        <h4>Client</h4>
      </article>
      {orders ? (
        orders.map((order) => {
          return (
            <article className="orders__list detail" key={uniqid()}>
              <p>{order.no}</p>
              <img src={siteLogo} alt="site logo" width="20px" />
              <p>{order.style}</p>
              <p>{order.amount}</p>
              <p>{order.status}</p>
              <p>{order.delivery}</p>
              <p>{order.payment}</p>
              <p>{order.client}</p>
              <img src={editIcon} alt="clothing" />
              <img src={trashCan} alt="clothing" />
            </article>
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </main>
  );
};

export default OrdersPage;
