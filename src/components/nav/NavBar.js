import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";



//The <Link/> component comes from the React Router package that was installed. It has an attribute named to.
//It will render a hyperlink in the DOM and when clicked, it will change the URL in the browser to the value of the to attribute.

export const NavBar = () => {

    let [isActive, setIsActive] = useState("home");

    
    const checkNavState = (navLocation) => {
        let activeClass = "";
        if (isActive === navLocation) {
          activeClass = "active"
        };

        return activeClass;
  
        // or....
        // return isActive === navLocation ? "active" : ""
    };

    return (
        <ul className="navbar">
            <li className={`navbar__item ${checkNavState("home")}`}
                onClick={() => setIsActive("home")}>
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li>
            <li className={`navbar__item ${checkNavState("locations")}`}
                onClick={() => setIsActive("locations")}>
                <Link className="navbar__link" to="/location">Locations</Link>
            </li>
            <li className={`navbar__item ${checkNavState("animals")}`}
                onClick={() => setIsActive("animals")}>
                <Link className="navbar__link" to="/animal">Animals</Link>
            </li>
            <li className={`navbar__item ${checkNavState("customers")}`}
              onClick={() => setIsActive("customers")}>
                <Link className="navbar__link" to="/customer">Customers</Link>
            </li>
            <li className={`navbar__item ${checkNavState("employees")}`}
              onClick={() => setIsActive("employees")}>
                <Link className="navbar__link" to="/employee">Employees</Link>
            </li>
        </ul>
    )
};