import React from "react";
import measurement from "../assets/Group 44.png";
import orderImg from "../assets/Rectangle 34.png";
import body from "../assets/image 14.png";
import axios from "axios";
import { useState, useEffect } from "react";
import uniqid from "uniqid";

const DetailsPage = (props) => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080${props.location.pathname}`)
      .then((response) => {
        setCustomer(response.data);
      });
  }, [props.location.pathname]);

  return (
    <main className="test ">
      <section className="completeDetails">
        <p>
          Location <span>{customer.location}</span>
        </p>
        <p>
          Address <span>{customer.address}</span>
        </p>
        <p>
          Contact Phone <span> {customer.phone}</span>
        </p>
        <p>
          Contact Email<span>{customer.email}</span>
        </p>
        <p>
          Client since <span>{customer.clientSince}</span>
        </p>
      </section>
      <article className="dashboard__orders completeDetails">
        <p className="dashboard__orders--heading">Orders</p>
      </article>
      {customer.orders
        ? customer.orders.map((order) => {
            return (
              <article className="orders__list completeDetails" key={uniqid()}>
                <img src={orderImg} alt="clothing" />
                <p>{order.style}</p>
                <p>{order.amount}</p>
                <p>{order.status}</p>
                <p>{order.delivery}</p>
              </article>
            );
          })
        : null}
      <section>
        <article className="dashboard__orders second completeDetails">
          <p className="dashboard__orders--heading">Measurements</p>
        </article>
      </section>
      <article className="measurement__container completeDetails">
        <img
          src={measurement}
          alt="measurement table"
          className="measurement__section"
        />
        <img
          src={body}
          alt="measurement table"
          className="measurement__section"
        />
      </article>
    </main>
  );
};

export default DetailsPage;
