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
import { SearchBar } from "./search/SearchBar"
import { AppTab } from "./apptabs/AppTab"
import {SpoonacularProvider} from "./recipes/SpoonacularProvider"





export const ApplicationViews = () => {
    return (
        <>
            <RecipeProvider>
                <Route exact path="/" render={(props) => {
                    return <>
                        <AppTab {...props}/>
                    </>
                }} />
            </RecipeProvider>


            <SpoonacularProvider>
            <RecipeProvider>        
            <FavoritesProvider>
                <CategoryProvider>
                <UserProvider>
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
                    <Route exact path="/search" render={(props) => {
                        return <>
                            <SearchBar {...props} />
                          

                        </>
                    }} />
                </UserProvider>
                </CategoryProvider>
            </FavoritesProvider>
            </RecipeProvider>
            </SpoonacularProvider>

            <Route path="/logout" render={(props) => {
                localStorage.removeItem("cbuser")
                localStorage.removeItem("cbuser_id")
                props.history.push("/login")
            }} />

        </>
    )
}