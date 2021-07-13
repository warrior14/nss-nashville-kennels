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
import { AnimalProvider } from "./animal/AnimalProvider.js";
import { CustomerProvider } from "./customer/CustomerProvider.js";
import { EmployeeProvider } from "./employee/EmployeeProvider.js";
import { LocationProvider } from "./location/LocationProvider.js";
import { AnimalList } from "./animal/AnimalList.js";
import { CustomerList } from "./customer/CustomerList.js";
import { EmployeeList } from "./employee/EmployeeList.js";
import { LocationList } from "./location/LocationList.js";
import { AnimalForm } from "./animal/AnimalForm.js";
import { EmployeeForm } from "./employee/EmployeeForm.js";
import { LocationForm } from "./location/LocationForm.js";
import { CustomerForm } from "./customer/CustomerForm.js";
import { AnimalDetail } from "./animal/AnimalDetail.js";
import { EmployeeDetail } from "./employee/EmployeeDetail.js";
import { LocationDetail } from "./location/LocationDetail.js";
import { AnimalSearch } from "./animal/AnimalSearch.js";




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
                {/* Creating the new route that will respond when the button click changes the URL to /animals/create. */}
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animal">
                            <AnimalSearch />
                            <AnimalList />
                        </Route>
    
    {/* The dynamic route component below matches a pattern. In the route that renders AnimalDetail, animalId is a parameter passed on the URL. */}
    {/* :animalId(\d+) is at the end of the URL. If the URL is http://localhost:3000/animal/detail/1, the value of 1 will be stored in a variable
     named animalId. The variable can then be used inside AnimalDetail. The colon allows the route to work for any animalId and /d+ is a regular expression
     that allows you to have a pattern for code to recognize the collection of animals as numbers (d is digit number and + means 1 or more length)*/}
                        <Route exact path="/animal/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>

                        <Route exact path="/animal/create">
                            <AnimalForm />
                        </Route>
                        
                        <Route path="/animal/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <EmployeeProvider>
                <LocationProvider>
                        <Route exact path="/employee">
                            <EmployeeList />
                        </Route>

                        <Route exact path="/employee/detail/:employeeId(\d+)">
                            <EmployeeDetail />
                        </Route>

                        <Route exact path="/employee/create">
                            <EmployeeForm />
                        </Route>

                        <Route path="/employee/edit/:employeeId(\d+)">
                            <EmployeeForm />
                        </Route>
                </LocationProvider>
            </EmployeeProvider>

            {/* <EmployeeProvider>
                <Route exact path="/employee">
                    <EmployeeList />
                </Route>
            </EmployeeProvider> */}

            <LocationProvider>
                <Route exact path="/location">
                    <LocationList />
                </Route>

                <Route exact path="/location/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>

                <Route exact path="/location/create">
                    <LocationForm />
                </Route>

                <Route path="/location/edit/:locationId(\d+)">
                    <LocationForm />
                </Route>
            </LocationProvider>

            <CustomerProvider>
                <Route exact path="/customer">
                    <CustomerList />
                </Route>

                <Route exact path="/customer/create">
                    <CustomerForm />
                </Route>
            </CustomerProvider>
        </>
    )
}