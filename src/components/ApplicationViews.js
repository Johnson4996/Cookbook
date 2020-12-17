import React from "react"
import { Route } from "react-router-dom"
import { RecipeProvider } from "./recipes/RecipeProvider"
import AppBar from "./AppBar"
import { FeaturedCarousel } from "./featured/FeaturedCarousel"


export const ApplicationViews = () => {
    return (
        <>
            <RecipeProvider>
                <Route exact path="/" render={(props) => {
                    return <>
                        {/* <AppBar {...props} /> */}
                        <FeaturedCarousel/>
                    </>
                }} />
            </RecipeProvider>


            <Route path="/logout" render={(props) => {
                localStorage.removeItem("cbuser")
                props.history.push("/login")
            }} />

        </>
    )
}