import React, {useContext, useEffect, useState} from "react"
import { FavoritesContext } from "../favorites/FavoritesProvider"
import { RecipeContext } from "../recipes/RecipeProvider"
import { UserContext } from "../users/UserProvider"
import CloseIcon from '@material-ui/icons/Close';




export const ProfileInfo = (props) =>{
const {cbUser, getSingleCbUser} = useContext(UserContext)
const{favorites, getUserFavorites, } = useContext(FavoritesContext)
const {getSingleUserRecipes, userRecipes} = useContext(RecipeContext)





useEffect(()=> {
    getSingleCbUser(props.match.params.id)
    .then(getUserFavorites(props.match.params.id))
    .then(getSingleUserRecipes(props.match.params.id))
},[])




    return (
    <>
        
            <section className="info__container">
                <div className="first__info">
                    <h2>{cbUser.user.username}'s Profile</h2>
                    <p>{cbUser.user.first_name} {cbUser.user.last_name}</p>
                </div>
                <div>
                    <p>Member Since: {cbUser.user.date_joined}</p>
                </div>
                <div className="user__bio">
                    <p>{cbUser.bio}</p>
                </div>
                <div className="user__likedRecipes">
                    <h4>{cbUser.user.username}'s Favorites</h4>
                    {
                        favorites.map(f =>{
                            return(
                                <div> 
                                    <p>{f.recipe.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="user__postedRecipes">
                    <h4>Recipes by {cbUser.user.username}</h4>
                    {
                        userRecipes.map(r =>{
                            return(
                                <div> 
                                    <p>{r.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
        )
    
}