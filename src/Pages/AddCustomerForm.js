import React from "react";
// import axios from "axios";

const AddCustomerForm = () => {
  // isPhoneNumberValid = () => {
  //   if (this.state.phoneNumber.length < 7) {
  //     return false;
  //   }
  //   return true;
  // };

  // isFormValid = () => {
  //   // TO DO: Check if the fields are all filled
  //   if (
  //     !this.state.email ||
  //     !this.state.contactName ||
  //     !this.state.position ||
  //     !this.state.phoneNumber ||
  //     !this.state.warehouseName ||
  //     !this.state.streetAddress ||
  //     !this.state.city ||
  //     !this.state.country
  //   ) {
  //     return false;
  //   }

  //   if (!this.isPhoneNumberValid()) {
  //     return false;
  //   }

  //   if (!this.isEmailValid()) {
  //     return false;
  //   }

  //   return true;
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let warehouseObj = {
  //     contactName: event.target.contactName.value,
  //     position: event.target.position.value,
  //     phoneNumber: event.target.phoneNumber.value,
  //     email: event.target.email.value,
  //     warehouseName: event.target.warehouseName.value,
  //     streetAddress: event.target.streetAddress.value,
  //     city: event.target.city.value,
  //     country: event.target.country.value,
  //   };

  //   if (this.isFormValid()) {
  //     axios.post("http://localhost:8080/warehouses", warehouseObj);

  //     // This is where we would make an axios request
  //     // to our backend to add the user to our database.
  //     alert("Added successfully");
  //   }
  //   this.handleCancel();
  // };

  return (
    <form className="warehouse">
      {/* Warehouse Section */}
      <section className="warehouse__section">
        <h2 className="warehouse__mainheading">Add New Customer</h2>
        <p className="warehouse__label">Customer Name</p>
        <input
          placeholder="Customer Name"
          name="warehouseName"
          type="text"
        ></input>

        <p className="warehouse__label">Customer Address</p>
        <input
          placeholder="Customer Address"
          name="streetAddress"
          type="text"
        ></input>

        <p className="warehouse__label">Customer Location</p>
        <input placeholder="Customer Location" name="city" type="text"></input>

        <p className="warehouse__label">Phone</p>
        <input placeholder="Phone" name="country" type="text"></input>
      </section>

      <section className="warehouse__section second">
        {/* <p className="warehouse__label">Phone </p>
        <input placeholder="Phone" name="contactName" type="number"></input> */}

        <p className="warehouse__label">Client Since</p>
        <input
          placeholder="Client since"
          name="phoneNumber"
          type="text"
        ></input>

        <p className="warehouse__label">Email</p>
        <input placeholder="Email" name="email" type="text"></input>

        {/* Buttons Section */}
        <div className="test">
          <article className="warehouse__button--container">
            <button className="warehouse__button cancel">Cancel</button>
            <button className="warehouse__button" type="submit">
              + Add Warehouse
            </button>
          </article>
        </div>
      </section>
    </form>
  );
};

export default AddCustomerForm;
