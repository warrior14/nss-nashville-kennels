import React from "react"
import { AnimalCard } from "./animal/AnimalCard.js"
import { EmployeeCard } from "./employees/Employee.js"
import { LocationCard } from "./location/Location.js"
import { CustomerCard } from "./customers/Customers.js"
import { PropsAndState } from "./PropsAndState.js"
import "./Kennel.css"
import "./animal/Animal.css"


//Look carefully at the <article> tag. In React, we add classes to a component with `className` instead of `class`.
export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Luke Madrazo"} />
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Employees</h2>
        <article className="employees">
           <EmployeeCard />
           <EmployeeCard />
           <EmployeeCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>


        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>

    </>
)



