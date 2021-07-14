import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider.js";
import "./Animal.css";
//The useParams method from react-router-dom allows the app to read a parameter from the URL.
import { useParams, useHistory } from "react-router-dom";

//Component responsible for showing all the details of an animal:
export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

	const [animal, setAnimal] = useState({})

	const {animalId} = useParams(); //useParams from react-router-dom allows the app to read a parameter from the URL with dynamic routing and returns
  // an object with all dynamic URL parameters as key:value pairs. animalId is the destructured object variable holding the value of number in URL.

  useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
    }, [])


  const history = useHistory();

  const handleRelease = () => {
    releaseAnimal(animal.id)
      .then(() => {
        history.push("/animal")
      })
  };

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* Immediate properties of an empty object will not break, however nested properties of an empty object will. Use Optional chaining (?.) 
      //operator to prevent nested values from breaking the code. Try with and without the ?. */}
      <div className="animal__location">Location: {animal.location?.name}</div> 
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button className="animal_btn" onClick={handleRelease}>Release Animal</button>
      {/* In edit mode, we should have an animalId in the URL. Otherwise, it is a new animal. */}
      <button className="animal_btn" onClick={() => {history.push(`/animal/edit/${animal.id}`)}}>
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
//If animal has a location and customer, display their names, if these properties do not exist, do not break the code