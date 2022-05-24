import React from "react";
import axios from "axios";

const AddOrderForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let orderObj = {
      no: event.target.no.value,
      style: event.target.style.value,
      amount: event.target.amount.value,
      status: event.target.status.value,
      phone: event.target.phone.value,
      client: event.target.client.value,
      payment: event.target.payment.value,
      delivery: event.target.delivery.value,
    };

    axios.post("http://localhost:8080/orders", orderObj).then(() => {
      event.target.reset();
    });
  };

  return (
    <form className="warehouse" onSubmit={handleSubmit}>
      <section className="warehouse__section">
        <h2 className="warehouse__mainheading">Add New Order</h2>
        <p className="warehouse__label">Order Number</p>
        <input
          className="warehouse__input"
          placeholder="Order Number"
          name="no"
          type="text"
        ></input>

        <p className="warehouse__label">Style</p>
        <input
          className="warehouse__input"
          placeholder="Customer Style"
          name="style"
          type="text"
        ></input>

        <p className="warehouse__label">Price</p>
        <input
          className="warehouse__input"
          placeholder="Price"
          name="amount"
          type="text"
        ></input>

        <p className="warehouse__label">Phone</p>
        <input
          className="warehouse__input"
          placeholder="Phone"
          name="phone"
          type="text"
          required
        ></input>
      </section>

      <section className="warehouse__section second">
        <p className="warehouse__label">Order Status</p>
        <input
          className="warehouse__input"
          placeholder="Order Status"
          name="status"
          type="text"
        ></input>

        <p className="warehouse__label">Client Name</p>
        <input
          className="warehouse__input"
          placeholder="Client Name"
          name="client"
          type="text"
          required
        ></input>

        <p className="warehouse__label">Payment Status</p>
        <input
          className="warehouse__input"
          placeholder="Payment Status"
          name="payment"
          type="text"
          required
        ></input>

        <p className="warehouse__label">Delivery Date</p>
        <input
          className="warehouse__input"
          placeholder="Delivery Date"
          name="delivery"
          type="text"
          required
        ></input>

        {/* Buttons Section */}
        <div className="test">
          <article className="warehouse__button--container">
            <button className="warehouse__button cancel">Cancel</button>
            <button className="warehouse__button" type="submit">
              + Add New Order
            </button>
          </article>
        </div>
      </section>
    </form>
  );
};

export default AddOrderForm;
