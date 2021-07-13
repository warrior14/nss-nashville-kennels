import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider.js";
import "./Employee.css";
//The useParams method from react-router-dom allows the app to read a parameter from the URL.
import { useParams, useHistory } from "react-router-dom";

//Component responsible for showing all the details of an animal:
export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
    }, [])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      {/* What's up with the question mark???? See below.*/}
      {/* Immediate properties of an empty object will not break, however nested properties of an empty object will. Use Optional chaining (?.) 
      //operator to prevent nested values from breaking the code. Try with and without the ?. */}
      <div className="employee__location">Location: {employee.location?.name}</div>
      <button onClick={() => {history.push(`/employee/edit/${employee.id}`)}}>
        Edit
      </button>
    </section>
  )
};

// Optional chaining operator info:

// The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to 
// check that each reference in the chain is valid. The ?. operator is like the . chaining operator, except that instead of causing an error if a 
// reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns
// undefined if the given function does not exist. This results in shorter and simpler expressions when accessing chained properties when the 
// possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee
// as to which properties are required.