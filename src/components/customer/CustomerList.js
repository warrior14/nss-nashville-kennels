//The useContext hook allows you to use data structures and functions that a parent provider component exposes. First need to import the context 
//object (CustomerContext) created in the CustomerProvider component so that the Context hook can access the objects it exposes.

import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider.js";
import { CustomerCard } from "./Customer.js";
import { useHistory } from 'react-router-dom';

export const CustomerList = () => {
  // This state(customers) changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. 
  //In this case, it is the API call for the customers. The empty array bracket is the dependency array. After the return, useEffect is 
  //automatically invoked and since the dependency array is empty, it only runs the first time the component renders.
  //useEffect hook takes 2 arguments(a function and an array), the second argument is an array that contain the variables whose value 
  //you're watching to see if it changes.
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers, Initial render before data")
    getCustomers()

  }, [])

  //2nd useEffect example code below is what happens after the the customers array gets initialized and has the animals data inside it and similar
  // to dispatching an event listener and listening for the change in the data in the array

  // useEffect(() => {
  //   console.log("CustomerList: Customer state changed")
  //   console.log(customers)
  // }, [customers])

  const history = useHistory()

  //Use the .map() array method to iterate the array of customers and generate HTML/JSX for each one by invoking the CustomerCard component function.
  //The key and customer arguments become properties on an object that gets passed as an argument.
  return (
    <>
      <h2 className="customerHeader">Customers</h2>
        <button className="addCustBut" onClick={() => {history.push("/customer/create")}}>
            Add New Customer
        </button>

      <div className="customers">
        {console.log("CustomerList: Render", customers)}
        {/* <h2>Customers</h2> */}
        {
          customers.map(customer => {
            return <CustomerCard key={customer.id} customer={customer} />
          })
        }
      </div>
    </>
  )
}