import React from "react";
import orderImg from "../../assets/Rectangle 34.png";

const orders = [
  {
    image: "/",
    style: "Slim fit trousers",
    Amount: "$1,000",
    Status: "/",
    Delivery: "5 Aug 21",
  },
  {
    image: "/",
    style: "Slim fit trousers",
    Amount: "$1,000",
    Status: "/",
    Delivery: "5 Aug 21",
  },
  {
    image: "/",
    style: "Slim fit trousers",
    Amount: "$1,000",
    Status: "/",
    Delivery: "5 Aug 21",
  },
  {
    image: "/",
    style: "Slim fit trousers",
    Amount: "$1,000",
    Status: "/",
    Delivery: "5 Aug 21",
  },
];
const OrdersComponent = () => {
  return orders.map((order) => {
    return (
      <article className="orders__list">
        <img src={orderImg} alt="clothing" />
        <p>{order.style}</p>
        <p>$2500</p>
        <p>Status</p>
        <p>5 Aug 21</p>
      </article>
    );
  });
};

export default OrdersComponent;
