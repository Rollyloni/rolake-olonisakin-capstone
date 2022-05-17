import React from "react";
import avatar from "../assets/Rectangle 48.png";
import editIcon from "../assets/Edit.jpg";
import trashCan from "../assets/trash-alt.jpg";
import viewOrders from "../assets/Group 14.png";
const customers = [
  {
    image: "/",
    Name: "John Doe",
    Location: "Vancouver",
    Address: "123 Lorem Ipsum",
    Phone: "453-646-3488",
    email: "johndoe@gmail.com",
  },
  {
    image: "/",
    Name: "John Doe",
    Location: "Vancouver",
    Address: "123 Lorem Ipsum",
    Phone: "453-646-3488",
    email: "johndoe@gmail.com",
  },
  {
    image: "/",
    Name: "John Doe",
    Location: "Vancouver",
    Address: "123 Lorem Ipsum",
    Phone: "453-646-3488",
    email: "johndoe@gmail.com",
  },
];

const CustomersPage = () => {
  return (
    <main className="test">
      <article className="dashboard__orders detail head">
        <h3 className="dashboard__orders--heading">Customers</h3>
        <span className="btn__new ">+ New Customer</span>
      </article>
      <article className="order__headings detail cust">
        <h4>Image</h4>
        <h4>Name</h4>
        <h4>Location</h4>
        <h4>Address</h4>
        <h4>Phone</h4>
        <h4>Email</h4>
      </article>
      {customers.map((order) => {
        return (
          <article className="orders__list detail">
            <img src={avatar} alt="clothing" />
            <p>{order.Name}</p>
            <p>{order.Location}</p>
            <p>{order.Address}</p>
            <p>{order.Phone}</p>
            <p>{order.email}</p>
            <img src={viewOrders} alt="clothing" />
            <img src={editIcon} alt="clothing" />
            <img src={trashCan} alt="clothing" />
          </article>
        );
      })}
    </main>
  );
};

export default CustomersPage;
