import React from "react";
import orderImg from "../../assets/Rectangle 34.png";
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
        <img src={orderImg} alt="clothing" />
        <p>{order.style}</p>
        <p>{order.amount}</p>
        <p>{order.status}</p>
        <p>{order.delivery}</p>
      </article>
    );
  });
};

export default OrdersComponent;
