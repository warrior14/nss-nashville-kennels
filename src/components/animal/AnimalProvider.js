//Code below imports the main React library, and two functions that it exports:
// Implement useState to hold and set the array of animals.
//A context stores a certain kind of data to be used in the app. When creating a data provider component in React, a context needs to be created.
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data; Nothing is stored in the context when it's defined. 
//At this point, it's just an empty container waiting to be filled.
export const AnimalContext = createContext()

// This component establishes what data can be used. This data provider component that will allow other components to use the data in the context.
export const AnimalProvider = (props) => {

    //The useState() hook defines a variable that holds the state of the component(animals), and a function that updates/modifies it(setAnimals).
    //The initial value of the animals variable is an empty array
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
        .then(res => res.json())
        .then(setAnimals)
    };

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    };

    //Method below allows any component to get a single animal by its id, but with the location and customer objects embedded inside the response:
    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
            .then(res => res.json())
    };
    

    /*
        You return a context provider which has the `animals` state, `getAnimals` function, and the `addAnimal` function as keys. This
        allows any child elements to access them. Other components can access the array of objects being stored in the animals variable, 
         can invoke the getAnimal and addAnimal functions.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, getAnimalById
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
};