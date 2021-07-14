import React, { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from "./EmployeeProvider.js";
// import { LocationContext } from "../location/LocationProvider.js";
import { EmployeeCard } from "./Employee.js";


export const EmployeeList = () => {
 
  const { employees, getEmployees } = useContext(EmployeeContext)
  // const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees, Initial render before data")
    // getLocations()
    //   .then(getEmployees)
    getEmployees()
  }, [])

  const history = useHistory()

  return (
    <>
      <h2 className="employeeHeader">Employees</h2>
		    <button className="addEmpBut" onClick={() => {history.push("/employee/create")}}>
            Add New Employee
        </button>

      <div className="employees">
        {console.log("EmployeeList: Render", employees)}
        {/* <h2>Employees</h2> */}
        {
          employees.map(employee => {
            // const location = locations.find(location => location.id === employee.locationId)
            // return <EmployeeCard key={employee.id} employee={employee} location={location} />
            return <EmployeeCard key={employee.id} employee={employee} />
          })
        }
      </div>
    </>
  )
};