import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"




export const NavBar = () => {
    return(
        <>
        
       
        
        <ul className="navbar">
        <Link to="/"><h2 className className= "navbar__logo">CookBook</h2></Link>

            <li className="navbar__item">
                <Link to="/recipe/new">Create</Link>
            </li>
            <li className="navbar__item">
                <Link to="/recipes/search">Search</Link>
            </li>
            <li className="navbar__item">
                <Link to="/profile">Profile</Link>
            </li>
            <li className="navbar__item">
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
        </>
    )
}