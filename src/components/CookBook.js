import React, {useState} from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import NavBar from "./nav/NavBar"
import SideBar from "./nav/SideBar"




export const CookBook = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

   return( <>
        <Route render={(props) => {
            if (localStorage.getItem("cbuser")) {
                return <>
                    <NavBar toggle={toggle}/>
                    <SideBar isOpen={isOpen} toggle={toggle}/>
                   <ApplicationViews />

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
}
