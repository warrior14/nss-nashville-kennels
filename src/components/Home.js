import React from "react";
import { PropsAndState } from './PropsAndState.js'
// import {AnimalCard} from "./animal/AnimalCard.js"
// import { EmployeeCard } from "./employee/Employee.js";
// import { LocationCard } from "./location/Location.js";
// import { CustomerCard } from "./customer/Customer.js";

export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName={"Luke Madrazo"} />

        {/* <h2>Animals</h2>
        <article className="animals">
            <AnimalCard dogName="Doodles" breed="Poodle" />
            <AnimalCard dogName="Pebbles" breed="Pomeranian"/>
            <AnimalCard dogName="Bubbles" breed="Corgi"/>
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard employeeName="Emma Beaton" employeeLocation="Nashville Kennels North" />
            <EmployeeCard employeeName="Devon Smith" employeeLocation="Nashville Kennels South"/>
            <EmployeeCard employeeName="Anne Johnson" employeeLocation="Nashville Kennels North"/>
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationCard locationName="Nashville Kennels North" locationAddress="200 Main Street" />
            <LocationCard locationName="Nashville Kennels South" locationAddress="002 South Street"/>
        </article>
    
        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard customerName="Hannah Hall" customerLocation="100 Infinity Way" />
            <CustomerCard customerName="Wanda Maximoff" customerLocation="21 Westbrooke Lane" />
            <CustomerCard customerName="Matthew Lang" customerLocation="456 Coding Street" />
            <CustomerCard customerName="Daniel Lee" customerLocation="3000 Developer Court"/>
        </article>      */}
    </>
)