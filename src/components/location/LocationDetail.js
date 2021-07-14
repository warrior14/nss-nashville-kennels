import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider.js";
import "./Location.css";
//The useParams method from react-router-dom allows the app to read a parameter from the URL.
import { useParams, useHistory } from "react-router-dom";

//Component responsible for showing all the details of a location:
export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      {/* What's up with the question mark???? See below.*/}
      {/* Immediate properties of an empty object will not break, however nested properties of an empty object will. Use Optional chaining (?.) 
      //operator to prevent nested values from breaking the code. Try with and without the ?. */}
      <div className="location__address">Address: {location.address}</div>
      <h4>Employees</h4>
        {
            location.employees?.map(employee => {
                return (
                    <>
                        <div>{employee.name}</div>
                    </>
                )
            })
        }

        <h4>Current Residents</h4>
        {
            location.animals?.map(animal => {
                return (
                    <>
                        <div>{animal.name}</div>
                    </>
                )
            })
        }

      <button className="edit__btn" onClick={() => {history.push(`/location/edit/${location.id}`)}}>
        Edit
      </button>
    </section>
  )
};