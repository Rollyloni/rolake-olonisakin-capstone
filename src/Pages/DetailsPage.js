import React from "react";
import measurement from "../assets/Group 44.png";
import orderImg from "../assets/Rectangle 34.png";
import body from "../assets/image 14.png";

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

const DetailsPage = () => {
  return (
    <main className="test ">
      <section className="completeDetails">
        <p>
          Location <span>Vancouver</span>
        </p>
        <p>
          Address <span>123 Lorem ipsum street</span>
        </p>
        <p>
          Contact Phone <span> 453-646-3488</span>
        </p>
        <p>
          Contact Email<span>johndoe@gmail.com</span>
        </p>
        <p>
          Client since <span>April 10, 2022</span>
        </p>
      </section>
      <article className="dashboard__orders completeDetails">
        <p className="dashboard__orders--heading">Orders</p>
      </article>
      {orders.map((order) => {
        return (
          <article className="orders__list completeDetails">
            <img src={orderImg} alt="clothing" />
            <p>{order.style}</p>
            <p>$2500</p>
            <p>Status</p>
            <p>5 Aug 21</p>
          </article>
        );
      })}
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
