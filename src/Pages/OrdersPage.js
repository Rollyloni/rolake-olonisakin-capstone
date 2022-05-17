import React from "react";
import orderImg from "../assets/Rectangle 34.png";
import editIcon from "../assets/Edit.jpg";
import trashCan from "../assets/trash-alt.jpg";

const ordersList = [
  {
    No: 1,
    image: "/",
    style: "Slim fit trousers",
    Amount: "$1,000",
    Status: "Active",
    Delivery: "5 Aug 21",
    payment: "paid",
    client: "John Doe",
  },
  {
    No: 2,
    image: "/",
    style: "Slim fit trousers",
    Amount: "$1,000",
    Status: "Active",
    Delivery: "5 Aug 21",
    payment: "paid",
    client: "John Doe",
  },
  {
    No: 3,
    image: "/",
    style: "Slim fit trousers",
    Amount: "$1,000",
    Status: "Active",
    Delivery: "5 Aug 21",
    payment: "paid",
    client: "John Doe",
  },
  {
    No: 4,
    image: "/",
    style: "Slim fit trousers",
    Amount: "$1,000",
    Status: "Active",
    Delivery: "5 Aug 21",
    payment: "paid",
    client: "John Doe",
  },
];

const OrdersPage = () => {
  return (
    <main className="test">
      <article className="dashboard__orders detail head">
        <h3 className="dashboard__orders--heading">Orders</h3>
        {/* <span className="btn__add">Most sell</span> */}
        <span className="btn__new ">+ New Order</span>
      </article>
      <article className="order__headings detail">
        <h4>No</h4>
        <h4>Image</h4>
        <h4>Style</h4>
        <h4>Amount</h4>
        <h4>Status</h4>
        <h4>Delivery Date</h4>
        <h4>Payment</h4>
        <h4>Client</h4>
      </article>
      {ordersList.map((order) => {
        return (
          <article className="orders__list detail">
            <p>{order.No}</p>
            <img src={orderImg} alt="clothing" />
            <p>{order.style}</p>
            <p>{order.Amount}</p>
            <p>{order.Status}</p>
            <p>{order.Delivery}</p>
            <p>{order.payment}</p>
            <p>{order.client}</p>
            <img src={editIcon} alt="clothing" />
            <img src={trashCan} alt="clothing" />
          </article>
        );
      })}
    </main>
  );
};

export default OrdersPage;
