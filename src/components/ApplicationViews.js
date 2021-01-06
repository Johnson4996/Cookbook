import React from "react"
import { Route } from "react-router-dom"
import { RecipeProvider } from "./recipes/RecipeProvider"
import { RecipeFeed } from "./recipes/RecipeFeed"
import { RecipeForm } from "./recipes/RecipeForm"
import { CategoryProvider } from "./categories/CategoryProvider"
import { UserProvider } from "./users/UserProvider"
import { ProfileInfo } from "./profile/ProfileInfo"
import { FavoritesProvider } from "./favorites/FavoritesProvider"
import { RecipeDetails } from "./recipes/RecipeDetails"




export const ApplicationViews = () => {
    return (
        <>
            <RecipeProvider>
                <Route exact path="/" render={(props) => {
                    return <>
                        <RecipeFeed {...props} />
                    </>
                }} />
            </RecipeProvider>


            <CategoryProvider>
                <RecipeProvider>
                    <Route exact path="/recipe/new" render={(props) => {
                        return <>
                            <RecipeForm {...props} id="RecipeForm" />
                        </>
                    }} />
                    <Route exact path="/recipe/edit/:recipe_id(\d+)" render={(props) => {
                        return <>
                            <RecipeForm {...props} id="RecipeForm" />
                        </>
                    }} />
                </RecipeProvider>
            </CategoryProvider>

            <RecipeProvider>        
            <FavoritesProvider>
                <UserProvider>
                    <Route exact path="/user/:id(\d+)" render={(props) => {
                        return <>
                            <ProfileInfo {...props} />
                        </>
                    }} />
                    <Route exact path="/recipe/:recipe_id(\d+)" render={(props) => {
                        return <>
                            <RecipeDetails {...props} />
                        </>
                    }} />
                </UserProvider>
            </FavoritesProvider>
            </RecipeProvider>

            <Route path="/logout" render={(props) => {
                localStorage.removeItem("cbuser")
                localStorage.removeItem("cbuser_id")
                props.history.push("/login")
            }} />

        </>
    )
}