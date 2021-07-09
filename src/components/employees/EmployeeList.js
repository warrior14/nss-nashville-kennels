import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider.js"
import { EmployeeCard } from "./Employee.js"


export const EmployeeList = () => {
 
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees, Initial render before data")
    getEmployees()

  }, [])

  return (
    <div className="employees">
      {console.log("EmployeeList: Render", employees)}
      {/* <h2>Employees</h2> */}
      {
        employees.map(employee => {
          return <EmployeeCard key={employee.id} employee={employee} />
        })
      }
    </div>
  )
}