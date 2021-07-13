import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider.js"
import { LocationCard } from "./Location.js"


export const LocationList = () => {
 
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    console.log("LocationList: useEffect - getLocations, Initial render before data")
    getLocations()

  }, [])

  return (
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {/* <h2>Locations</h2> */}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
}