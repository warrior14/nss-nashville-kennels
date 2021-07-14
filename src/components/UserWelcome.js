
// import React, { useState } from "react"
import "./Home.css";



export const UserWelcome = ({ yourName }) => {
  // let [countClicks, setCountClicks] = useState(0) //returns an array of 2 things: countClicks variable whose initial value is 0 and setCountClicks
  //function that updates countClicks state when useState hook is invoked

  // const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
  //   const newCountClicks = ++countClicks
  //   setCountClicks(newCountClicks)
  // }

  return (
    <>
      <h3 class="greeting">Greetings, {yourName}!</h3>
      {/* <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button> */}
    </>
  )
};