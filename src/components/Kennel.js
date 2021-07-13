  
//Kennel is a container component. It renders no HTML itself. It simply contains other components that are responsible for the presentation
// and behavior of the application. This Kennel component contains two different kinds of child components which are NavBar and ApplicationViews: 
//NavBar: This is a Presentation Component. Directly expresses HTML.
//ApplicationViews: A Controller/Router Component whose only responsibility is to control the behavior of the system and maps URLs to components.
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Kennel.css";

export const Kennel = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kennel_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);




// import React from "react"
// import "./Kennel.css"
// import { AnimalCard } from "./animal/AnimalCard.js"
// import { EmployeeCard } from "./employee/Employee.js"
// import { LocationCard } from "./location/Location.js"
// import { CustomerCard } from "./customer/Customer.js"
// import { PropsAndState } from "./PropsAndState.js"
// import "./animal/Animal.css"

//Look carefully at the <article> tag. In React, we add classes to a component with `className` instead of `class`.

// export const Kennel = () => (
//     <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>

//         <address className="address">
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>

//         <PropsAndState yourName={"Luz Angelique"} />

//         <h2>Animals</h2>
//         <article className="animals">
//             <AnimalCard />
//             <AnimalCard />
//             <AnimalCard />
//         </article>

//         <h2>Employees</h2>
//         <article className="employees">
//             <EmployeeCard />
//             <EmployeeCard />
//             <EmployeeCard />
//         </article>

//         <h2>Locations</h2>
//         <article className="locations">
//             <LocationCard />
//             <LocationCard />
//         </article>

//         <h2>Customers</h2>
//         <article className="customers">
//             <CustomerCard />
//             <CustomerCard />
//             <CustomerCard />
//             <CustomerCard />
//         </article>
//     </>
// )