import React from "react";
import axios from "axios";

const AddCustomerForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let customerObj = {
      name: event.target.name.value,
      location: event.target.location.value,
      address: event.target.address.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      clientSince: event.target.clientSince.value,
    };

    axios.post("http://localhost:8080/customers", customerObj).then(() => {
      event.target.reset();
    });
  };

  return (
    <form className="warehouse" onSubmit={handleSubmit}>
      <section className="warehouse__section">
        <h2 className="warehouse__mainheading">Add New Customer</h2>
        <p className="warehouse__label">Customer Name</p>
        <input
          className="warehouse__input"
          placeholder="Customer Name"
          name="name"
          type="text"
        ></input>

        <p className="warehouse__label">Customer Address</p>
        <input
          className="warehouse__input"
          placeholder="Customer Address"
          name="address"
          type="text"
        ></input>

        <p className="warehouse__label">Customer Location</p>
        <input
          className="warehouse__input"
          placeholder="Customer Location"
          name="location"
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
        <p className="warehouse__label">Client Since</p>
        <input
          className="warehouse__input"
          placeholder="DD-MM-YEAR"
          name="clientSince"
          type="text"
        ></input>

        <p className="warehouse__label">Email</p>
        <input
          className="warehouse__input"
          placeholder="Email"
          name="email"
          type="text"
        ></input>

        {/* Buttons Section */}
        <div className="test">
          <article className="warehouse__button--container">
            <button className="warehouse__button cancel">Cancel</button>
            <button className="warehouse__button" type="submit">
              + Add Customer
            </button>
          </article>
        </div>
      </section>
    </form>
  );
};

export default AddCustomerForm;
