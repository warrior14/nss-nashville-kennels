import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { LocationContext } from "../location/LocationProvider.js";
import "./Location.css";

export const LocationForm = () => {
    const { addLocation, getLocationById, updateLocation } = useContext(LocationContext)

  // With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

  // Define the initial state of the form inputs with useState()


    //for edit, hold on to state of employee in this view
    const [location, setLocation] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {locationId} = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newLocation = { ...location }
      //location is an object with properties.
      //set the property to the new value
      newLocation[event.target.name] = event.target.value
      //update state
      setLocation(newLocation)
    };

    const handleSaveLocation = () => {
      if (location.name === "" || location.address === "") {
          window.alert("Please provide values for both input fields.")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (locationId) {
          //PUT - update
          updateLocation({
              id: location.id,
              name: location.name,
              address: location.address
          })
          .then(() => history.push(`/location/detail/${location.id}`))
        } else {
          //POST - add
          addLocation({
              name: location.name,
              address: location.address
          })
          .then(() => history.push("/location"))
        }
      }
    }

    // If locationId is in the URL, getLocationById
    useEffect(() => {
      if (locationId){
        getLocationById(locationId)
        .then(location => {
            setLocation(location)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      };
    }, []);


    // useEffect(() => {
    //   getLocations().then(() => {
    //     if (locationId){
    //       getLocationById(locationId)
    //       .then(location => {
    //           setLocation(location)
    //           setIsLoading(false)
    //       })
    //     } else {
    //       setIsLoading(false)
    //     }
    //   })
    // }, [])

    return (
      <form className="locationForm">
        <h2 className="locationForm__title">New Location</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="locationName">Location name: </label>
            <input type="text" id="locationName" name="name" required autoFocus className="form-control"
            placeholder="Location name"
            onChange={handleControlledInputChange}
            defaultValue={location.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="locationAddress">Location address:</label>
            <input type="text" id="locationAddress" name="address" required autoFocus className="form-control" 
            placeholder="Location address" 
            onChange={handleControlledInputChange}
            defaultValue={location.address}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveLocation()
          }}>
        {/* Ternary: is there a locationId in the URL? If so, display the Save Location button, else display the Add Location button */}
        {locationId ? <div>Save Location</div> : <div>Add Location</div> }</button>
      </form>
    )
};



// import React, { useContext, useEffect, useState } from "react";
// import { LocationContext } from "../location/LocationProvider.js";
// import "./Location.css";
// import { useHistory } from 'react-router-dom';

// export const LocationForm = () => {

//   const { addLocation } = useContext(LocationContext)
 

//   /*
//   With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

//   Define the initial state of the form inputs with useState()
//   */

//   const [location, setLocation] = useState({
//     name: "",
//     address: "",
//   });

//   const history = useHistory(); 

//   //when a field changes, update state. The return will re-render and display based on the values in state
//   //Controlled component
//   const handleControlledInputChange = (event) => {
//     /* When changing a state object or array,
//     always create a copy, make changes, and then set state.*/
//     const newLocation = { ...location }
//     /* Location is an object with properties.
//     Set the property to the new value
//     using object bracket notation. */
//     newLocation[event.target.id] = event.target.value
//     // update state
//     setLocation(newLocation)
//   }

//   const handleClickSaveLocation = (event) => {
//     event.preventDefault() //Prevents the browser from submitting the form

//     if (location.name === "" || location.address === "") {
//         window.alert("Please provide values for both input fields.")
//     } else {
//       //Invoke addLocation passing the new location object as an argument
//       //Once complete, change the url and display the location list

//         const newLocation = {
//             name: location.name,
//             address: location.address,
//         }
//     addLocation(newLocation)
//     .then(() => history.push("/location"))
//     } 
//   }

//   return (
//     <form className="locationForm">
//       <h2 className="locationForm__title">New Location</h2>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="name">Location name:</label>
//           <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name" value={location.name} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="address">Location address:</label>
//           <input type="text" id="address" required autoFocus className="form-control" placeholder="Location address" value={location.address} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <button className="btn btn-primary" onClick={handleClickSaveLocation}>
//         Save Location
//           </button>
//     </form>
//   )
// };