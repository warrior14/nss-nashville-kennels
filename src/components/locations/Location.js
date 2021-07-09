import React from "react"
import "./Location.css"

// export const LocationCard = ({locationName, locationAddress}) => (
//     <section className="location">
//         <h3 className="location__name">{locationName}</h3>
//         <div className="location__location">{locationAddress}</div>
//     </section>
// )

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__location">Address: {location.address}</address>
    </section>
)