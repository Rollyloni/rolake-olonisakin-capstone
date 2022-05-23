import React, { useEffect, useState } from "react";
import avatar from "../assets/Rectangle 48.png";
import editIcon from "../assets/Edit.jpg";
import trashCan from "../assets/trash-alt.jpg";
import viewOrders from "../assets/Group 14.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import uniqid from "uniqid";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/customers").then((response) => {
      console.log(response.data);
      setCustomers(response.data);
    });
  }, []);

  return (
    <main className="test">
      <article className="dashboard__orders detail head">
        <h3 className="dashboard__orders--heading">Customers</h3>
        <NavLink to="customers/add-customer" className="navlink">
          <span className="btn__new ">+ New Customer</span>
        </NavLink>
      </article>
      <article className="order__headings detail cust">
        <h4>Image</h4>
        <h4>Name</h4>
        <h4>Location</h4>
        <h4>Address</h4>
        <h4>Phone</h4>
        <h4>Email</h4>
      </article>
      {customers ? (
        customers.map((order) => {
          return (
            <article className="orders__list detail" key={uniqid()}>
              <img src={avatar} alt="clothing" />
              <p>{order.name}</p>
              <p>{order.location}</p>
              <p>{order.address}</p>
              <p>{order.phone}</p>
              <p>{order.email}</p>
              <img src={viewOrders} alt="clothing" />
              <img src={editIcon} alt="clothing" />
              <img src={trashCan} alt="clothing" />
            </article>
          );
        })
      ) : (
        <p>loading</p>
      )}
    </main>
  );
};

export default CustomersPage;
