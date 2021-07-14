  
//The useContext hook allows you to use data structures and functions that a parent provider component exposes. First need to import the context 
//object (AnimalContext) created in the AnimalProvider component so that the Context hook can access the objects it exposes.

import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { AnimalContext } from "./AnimalProvider.js";
// import { LocationContext } from "../location/LocationProvider.js";
// import { CustomerContext } from "../customer/CustomerProvider.js";
import { AnimalCard } from "./AnimalCard.js";
// import "./Animal.css"

export const AnimalList = () => {
  // This state(animals) changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
  // const { locations, getLocations } = useContext(LocationContext)
  // const { customers, getCustomers } = useContext(CustomerContext)

  //The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. 
  //In this case, it is the API call for the animals. The empty array bracket is the dependency array. After the return, useEffect is 
  //automatically invoked and since the dependency array is empty, it only runs the first time the component renders.
  //useEffect hook takes 2 arguments(a function and an array), the second argument is an array that contain the variables whose value 
  //you're watching to see if it changes.

  // Since you are no longer ALWAYS displaying all of the animals:
  const [ filteredAnimals, setFiltered ] = useState([])
  const history = useHistory()

  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      console.log("AnimalList: useEffect - getAnimals, Initial render before data")
      // getLocations()
      // .then(getCustomers)
      // .then(getAnimals)
      getAnimals()
  }, []);

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals]);


  //2nd useEffect example code below is what happens after the the animals array gets initialized and has the animals data inside it and similar to
  //dispatching an event listener and listening for the change in the data in the array

  // useEffect(() => {
  //   console.log("AnimalList: Animal state changed")
  //   console.log(animals)
  // }, [animals])

  return (
    <>
      <h2 className="animalHeader">Animals</h2>

		  <button className="addAnimalBut" onClick={() => {history.push("/animal/create")}}>
          Make Reservation
      </button>

      <div className="animals">
        {console.log("AnimalList: Render", animals)}
        {
        //Use the .map() array method to iterate the array of animals and generate HTML/JSX for each one by invoking the AnimalCard component function.
        //The key and animal arguments become properties on an object that gets passed as an argument.
          filteredAnimals.map(animal => {
          //Use the .find() method on both the customers array and the locations array to find the object representation that each foreign key is referencing.
            // const owner = customers.find(customer => customer.id === animal.customerId)
            // const clinic = locations.find(location => location.id === animal.locationId)
            // return <AnimalCard key={animal.id} location={clinic} customer={owner} animal={animal} />
            return <AnimalCard key={animal.id} animal={animal} />
          })
        }
      </div>
    </>
  )
}

// The 'flow' for adding a new animal:
// 1) click the Add Animal btn
// 2) Change the url to `animals/create` with 'history'
// 3) That triggers the router to match the URL to know which comp to render
// 4) The animal form is rendered
// 5) The user fills out the FormData, causing the initial 'animal' state to be updated
// 6) The user clicks 'save animal' and we call 'addAnimal', passing it the new object we created from state
// 7) After the save and the update of animals state, redirect to AnimalList using history