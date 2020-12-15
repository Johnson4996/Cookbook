import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"



export const CookBook = (props) => (

    <>
        <Route render={(props) => {
            if (localStorage.getItem("cbuser")) {
                return <>
                   <NavBar/>

                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={() => {
            if (localStorage.getItem("cbuser")) {
                return <Redirect to="/" />
            } else {
                return <Login />
            }
        }} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)
