import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { EmployeeCard } from "./employees/Employee.js"
import { LocationCard } from "./locations/Location.js"
import { CustomerCard } from "./customers/Customers.js"
import { AnimalProvider } from "./animals/AnimalProvider"
import { AnimalList } from "./animals/AnimalList"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            <Route path="/employees">
                <EmployeeCard />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>

            <Route path="/customers">
                <CustomerCard />
            </Route>
        </>
    )
}
