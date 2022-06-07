import React, { useEffect, useState } from "react";
import avatar from "../assets/placeholder.jpeg";
import editIcon from "../assets/Edit.jpg";
import trashCan from "../assets/trash-alt.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import uniqid from "uniqid";

const CustomersPage = (props) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/customers").then((response) => {
      setCustomers(response.data);
    });
  }, [customers]);

  function handleClick(id) {
    axios.get(`http://localhost:8080/customers/${id}`);
  }

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
              <img src={avatar} alt="clothing" width="30px" />
              <p>{order.name}</p>
              <p>{order.location}</p>
              <p>{order.address}</p>
              <p>{order.phone}</p>
              <p>{order.email}</p>
              <NavLink
                to={`/customers/${order.id}`}
                className="navlink"
                onClick={() => {
                  handleClick(order.id);
                }}
              >
                <span>view orders</span>
              </NavLink>
              {/* <img src={viewOrders} alt="clothing" /> */}
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
