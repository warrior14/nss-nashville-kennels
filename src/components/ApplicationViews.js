//This component (router) defines all of the URLs the application will support and which views will be displayed for each one.
//ApplicationViews defines how the app will respond when the URL matches in the to attributes in each Link component from the NavBar component. 
//When a user clicks on one of the hyperlinks in the navigation bar, the code from this component dictates which component should be rendered.

import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home.js";
// import { AnimalCard } from "./animal/AnimalCard.js"
// import { EmployeeCard } from "./employee/Employee.js";
// import { LocationCard } from "./location/Location.js";
// import { CustomerCard } from "./customer/Customer.js";
import { AnimalProvider } from "./animals/AnimalProvider.js";
import { AnimalList } from "./animals/AnimalList.js";
import { CustomerProvider } from "./customers/CustomerProvider.js";
import { CustomerList } from "./customers/CustomerList.js";
import { EmployeeProvider } from "./employees/EmployeeProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { LocationProvider } from "./locations/LocationProvider.js";
import { LocationList } from "./locations/LocationList.js";


//exact is needed on the first route for Home, otherwise it will also match the other routes, and the Home will render for every route.
//The <Link/> and the <Route/> JSX elements are complementary to each other. If a new Link element is added in the app on the NavBar component
// with a new URL, then a matching Route element must be created in this component.

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            {/* <Route path="/animal">
                <AnimalCard />
            </Route> */}

            <AnimalProvider>
                <Route exact path="/animal">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            <EmployeeProvider>
                <Route exact path="/employee">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            <LocationProvider>
                <Route exact path="/location">
                    <LocationList />
                </Route>
            </LocationProvider>

            <CustomerProvider>
                <Route exact path="/customer">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}