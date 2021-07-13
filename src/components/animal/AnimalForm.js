import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { LocationContext } from "../location/LocationProvider.js";
import { AnimalContext } from "../animal/AnimalProvider.js";
import { CustomerContext } from "../customer/CustomerProvider.js";
import "./Animal.css";

export const AnimalForm = () => {
    const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

  // With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

  // Define the initial state of the form inputs with useState()


    //for edit, hold on to state of animal in this view
    const [animal, setAnimal] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {animalId} = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newAnimal = { ...animal }
      //animal is an object with properties.
      //set the property to the new value
      newAnimal[event.target.name] = event.target.value
      //update state
      setAnimal(newAnimal)
    }

    const handleSaveAnimal = () => {
      if (parseInt(animal.locationId) === 0 || parseInt(animal.customerId) === 0) {
          window.alert("Please select a location or a customer.")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (animalId) {
          //PUT - update
          updateAnimal({
              id: animal.id,
              name: animal.name,
              breed: animal.breed,
              locationId: parseInt(animal.locationId),
              customerId: parseInt(animal.customerId)
          })
          .then(() => history.push(`/animal/detail/${animal.id}`))
        } else {
          //POST - add
          addAnimal({
              name: animal.name,
              breed: animal.breed,
              locationId: parseInt(animal.locationId),
              customerId: parseInt(animal.customerId)
          })
          .then(() => history.push("/animal"))
        }
      }
    }

    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
      getCustomers().then(getLocations).then(() => {
        if (animalId){
          getAnimalById(animalId)
          .then(animal => {
              setAnimal(animal)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
      <form className="animalForm">
        <h2 className="animalForm__title">New Animal</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="animalName">Animal name: </label>
            <input type="text" id="animalName" name="name" required autoFocus className="form-control"
            placeholder="Animal name"
            onChange={handleControlledInputChange}
            defaultValue={animal.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="animalBreed">Animal breed:</label>
            <input type="text" id="animalBreed" name="breed" required autoFocus className="form-control" 
            placeholder="Animal breed" 
            onChange={handleControlledInputChange}
            defaultValue={animal.breed}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={animal.locationId} name="locationId" id="animalLocation" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(location => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="customer">Customer: </label>
            <select value={animal.customerId} name="customerId" id="customerAnimal" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a customer</option>
              {customers.map(customer => (
                <option key={customer.id} value={customer.id}>
                    {customer.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveAnimal()
          }}>
        {/* Ternary: is there an animalId in the URL? If so, display the Save Animal button, else display the Add Animal button */}
        {animalId ? <div>Save Animal</div> : <div>Add Animal</div> }</button>
      </form>
    )
};

// Here is the flow of the AnimalForm component:
// Component loads and renders - Save button should be disabled since the data is not available yet.
// useEffect() invoked. For the dropdowns get data for locations and customers.
// Determine if this is an edit based on animalId in the URL. If true, invoke getAnimalById() and then setAnimal state
// Render (display new state in DOM)
// User makes changes. As changes are made, state is updated. The DOM always displays what is in state.
// Select Save
// Invoke handleSaveAnimal(). This functions determines if this is a new animal or edit, prepares an object with the animal data and invokes the appropriate provider method (addAnimal or updateAnimal).
// The handleSaveAnimal method will also setIsLoading(true) - this ensures the user cannot repeatedly click the button while the API is being updated.
// Once the API has updated, change the view to display updated data
// This component will populate the input fields with the current values from the API. We will obtain all necessary values using a useEffect() hook.



// export const AnimalForm = () => {
//   const { addAnimal } = useContext(AnimalContext)
//   const { locations, getLocations } = useContext(LocationContext)
//   const { customers, getCustomers } = useContext(CustomerContext)

//   /*
//   With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
//   Define the initial state of the form inputs with useState()
//   */

//   const [animal, setAnimal] = useState({
//     name: "",
//     breed: "",
//     locationId: 0,
//     customerId: 0
//   });

//   const history = useHistory();

//   /*
//   Reach out to the world and get customers state
//   and locations state on initialization.
//   */
//   useEffect(() => {
//     getCustomers().then(getLocations)
//   }, [])

//   //when a field changes, update state. The return will re-render and display based on the values in state
//   //Controlled component
//   const handleControlledInputChange = (event) => {
//     /* When changing a state object or array,
//     always create a copy, make changes, and then set state.*/
//     const newAnimal = { ...animal }
//     /* Animal is an object with properties.
//     Set the property to the new value
//     using object bracket notation. */
//     newAnimal[event.target.id] = event.target.value
//     // update state
//     setAnimal(newAnimal)
//   }

//   const handleClickSaveAnimal = (event) => {
//     event.preventDefault() //Prevents the browser from submitting the form

//     const locationId = parseInt(animal.locationId)
//     const customerId = parseInt(animal.customerId)

//     if (locationId === 0 || customerId === 0) {
//       window.alert("Please select a location and a customer")
//     } else {
//       //Invoke addAnimal passing the new animal object as an argument
//       //Once complete, change the url and display the animal list

//       const newAnimal = {
//         name: animal.name,
//         breed: animal.breed,
//         locationId: locationId,
//         customerId: customerId
//       }
//       addAnimal(newAnimal)
//         .then(() => history.push("/animal"))
//     }
//   }

//   return (
//     <form className="animalForm">
//       <h2 className="animalForm__title">New Animal</h2>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="name">Animal name:</label>
//           <input type="text" id="name" required autoFocus className="form-control" placeholder="Animal name" value={animal.name} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="name">Animal breed:</label>
//           <input type="text" id="breed" required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="location">Assign to location: </label>
//           <select name="locationId" id="locationId" className="form-control" value={animal.locationId} onChange={handleControlledInputChange}>
//             <option value="0">Select a location</option>
//             {locations.map(location => (
//               <option key={location.id} value={location.id}>
//                 {location.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="customerId">Customer: </label>
//           <select name="customer" id="customerId" className="form-control" value={animal.customerId} onChange={handleControlledInputChange}>
//             <option value="0">Select a customer</option>
//             {customers.map(customer => (
//               <option key={customer.id} value={customer.id}>
//                 {customer.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </fieldset>
//       <button className="btn btn-primary" onClick={handleClickSaveAnimal}>
//         Save Animal
//           </button>
//     </form>
//   )
// }