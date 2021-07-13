import React, { useContext, useEffect, useState } from "react";
import { CustomerContext } from "../customer/CustomerProvider.js";
import "./Customer.css";
import { useHistory } from 'react-router-dom';

export const CustomerForm = () => {

  const { addCustomer } = useContext(CustomerContext)
 

  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  Define the initial state of the form inputs with useState()
  */

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
  });

  const history = useHistory(); 

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newCustomer = { ...customer }
    /* Customer is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newCustomer[event.target.id] = event.target.value
    // update state
    setCustomer(newCustomer)
  }

  const handleClickSaveCustomer = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    if (customer.name === "" || customer.address === "") {
        window.alert("Please provide values for both input fields.")
    } else {
      //Invoke addCustomer passing the new location object as an argument
      //Once complete, change the url and display the customer list

        const newCustomer = {
            name: customer.name,
            address: customer.address,
        }
    addCustomer(newCustomer)
    .then(() => history.push("/customer"))
    } 
  }

  return (
    <form className="customerForm">
      <h2 className="customerForm__title">New Customer</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Customer name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Customer name" value={customer.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Customer address:</label>
          <input type="text" id="address" required autoFocus className="form-control" placeholder="Customer address" value={customer.address} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveCustomer}>
        Save Customer
          </button>
    </form>
  )
};