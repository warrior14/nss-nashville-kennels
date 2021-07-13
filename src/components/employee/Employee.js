
import React from "react";
import "./Employee.css";
import { Link } from "react-router-dom";


export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">
          <Link to={`/employee/detail/${employee.id}`}>
            {employee.name}
          </Link>
        </h3>
    </section>
);


// import React from "react"
// import "./Employee.css"



// export const EmployeeCard = ({ employee, location }) => (
//     <section className="employee">
//         <h3 className="employee__name">{employee.name}</h3>
//         <address className="employee__location">Location: {location.name}</address>
//     </section>
// );


// export const EmployeeCard = ({employeeName, employeeLocation}) => (
//     <section className="employee">
//         <h3 className="employee__name">{employeeName}</h3>
//         <div className="employee__location">{employeeLocation}</div>
//     </section>
// )