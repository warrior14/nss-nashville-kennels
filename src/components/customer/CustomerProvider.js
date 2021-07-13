//Code below imports the main React library, and two functions that it exports:
// Implement useState to hold and set the array of customers.
//A context stores a certain kind of data to be used in the app. When creating a data provider component in React, a context needs to be created.
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data; Nothing is stored in the context when it's defined. 
//At this point, it's just an empty container waiting to be filled.
export const CustomerContext = createContext()

// This component establishes what data can be used. This data provider component that will allow other components to use the data in the context.
export const CustomerProvider = (props) => {

    //The useState() hook defines a variable that holds the state of the component(customers), and a function that updates/modifies it(setCustomers).
    //The initial value of the customers variable is an empty array
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(setCustomers)
    }

    const addCustomer = customerObj => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

    /*
        You return a context provider which has the `customers` state, `getCustomers` function, and the `addCustomer` function as keys. This
        allows any child elements to access them. Other components can access the array of objects being stored in the customers variable, 
        can can invoke the getCustomer and addCustomer functions.
    */
    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}