import React from "react";
import { UserWelcome } from './UserWelcome.js';
import "./Home.css";


export const Home = () => (
    <>
        <div className="home_div">
            <h2 className="header">Nashville Kennels</h2>
            <small className="slogan">Where Dogs Can Be Dogs!.</small>

            <address className="directions">
                <div className="puppy">Visit A Location Near You!</div>
                <div className="puppy">49 Doggy Dog Way</div>
            </address>

            <UserWelcome yourName={"Luke Madrazo"} />
        </div>
    </>
)