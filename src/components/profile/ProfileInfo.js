import React, {useContext, useEffect} from "react"
import { FavoritesContext } from "../favorites/FavoritesProvider"
import { RecipeContext } from "../recipes/RecipeProvider"
import { UserContext } from "../users/UserProvider"
import { Link } from "react-router-dom"
import "./profile.css"




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
                    <h2>{cbUser.user.username}'s Profile</h2>
                <div className="first__info">
                    <p>Name: {cbUser.user.first_name} {cbUser.user.last_name}</p>
                </div>
                <div className="user__bio">
                    <p>{cbUser.bio}</p>
                </div>
                <h4 className="profileFavoritesTitle">{cbUser.user.username}'s Favorites</h4>
                <div className="userLikedRecipesContainer">
                    {
                        favorites.map(f =>{
                            return(
                                <div key={f.recipe.id} className="recipeCard profileRecipeCard">
                            <img className="recipeCardImage" src={f.recipe.picture} alt="recipe_image"/>
                            <div className="recipeFeedInfoContainer">
                                <Link className="recipeCardTitle" onClick={()=>{props.history.push(`/recipe/${f.recipe.id}`)}}><h4>{f.recipe.title}</h4></Link>
                            </div>
                        </div>
                            )
                        })
                    }
                </div>
                <div className="userPostedRecipesContainer">
                    <h4>Recipes by {cbUser.user.username}</h4>
                    <div>
                    {
                        userRecipes.map(r =>{
                            return(
                                <div key={r.id} className="recipeCard">
                            <img className="recipeCardImage" src={r.picture} alt="recipe_image"/>
                            <div className="recipeFeedInfoContainer">
                                <Link className="recipeCardTitle" onClick={()=>{props.history.push(`/recipe/${r.id}`)}}><h4>{r.title}</h4></Link>
                            </div>
                        </div>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </>
        )
    
}