import React from "react";
import siteLogo from "../../assets/Group 2.png";
import { useState, useEffect } from "react";
import axios from "axios";
import uniqid from "uniqid";

const OrdersComponent = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return orders.map((order) => {
    return (
      <article className="orders__list" key={uniqid()}>
        <img src={siteLogo} alt="site logo" width="20px" />
        <p>{order.style}</p>
        <p>{order.amount}</p>
        <p>{order.status}</p>
        <p>{order.delivery}</p>
      </article>
    );
  });
};

export default OrdersComponent;
