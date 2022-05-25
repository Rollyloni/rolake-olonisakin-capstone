import React from "react";
import measurement from "../assets/Group 44.png";
import siteLogo from "../assets/Group 2.png";
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
      <section className="details__info completeDetails">
        <h4 className="details__info--heading">
          Location: <span>{customer.location}</span>
        </h4>
        <h4>
          Address: <span>{customer.address}</span>
        </h4>
        <h4>
          Contact Phone: <span> {customer.phone}</span>
        </h4>
        <h4>
          Contact Email: <span>{customer.email}</span>
        </h4>
        <h4>
          Client since: <span>{customer.clientSince}</span>
        </h4>
      </section>
      <article className="dashboard__orders completeDetails">
        <p className="dashboard__orders--heading">Orders</p>
      </article>
      <section>
        <article className="order__headings completeDetails">
          <h4>Image</h4>
          <h4>Style</h4>
          <h4>Amount</h4>
          <h4>Status</h4>
          <h4>Delivery Date</h4>
        </article>
      </section>
      {customer.orders
        ? customer.orders.map((order) => {
            return (
              <article className="orders__list completeDetails" key={uniqid()}>
                <img src={siteLogo} alt="site logo" width="20px" />
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
