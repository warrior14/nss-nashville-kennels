import React from "react";
import { AnimalCard } from "./animals/AnimalCard.js"
import { EmployeeCard } from "./employees/Employee.js"
import { LocationCard } from "./locations/Location.js"
import { CustomerCard } from "./customers/Customers.js"
import { PropsAndState } from "./PropsAndState.js"

export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Brenda"} />
        
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
