import React from "react"




export const NavBar = () => {
    return(
        <ul className="navbar">
            <li className="navbarTitle">
                <h2>CookBook</h2>
            </li>
            <li className="navbar__item">
                Home
            </li>
            <li className="navbar__item">
                Logout
            </li>
        </ul>
    )
}