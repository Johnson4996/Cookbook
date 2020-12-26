import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { RecipeContext } from "./RecipeProvider"


export const RecipeDetails = (props) => {

    const {recipe, getSingleRecipe} = useContext(RecipeContext)

   useEffect(()=>{
       getSingleRecipe(props.match.params.recipe_id)
       
   }, [])

   

    return(
        <>
        <div className="recipeInfoContainer">
            <p>{recipe.category.label}</p>
            <h2>{recipe.title}</h2>
        <p>By: <Link onClick={()=>{props.history.push(`/user/${recipe.author.user.id}`)}}>{recipe.author.user.username}</Link> </p>
        <p>{recipe.info}</p>
        <img src={recipe.picture}></img>
        <p>{recipe.ingredients}</p>
        <p>{recipe.directions}</p>
        <p>{recipe.notes}</p>

        </div>
        </>
    )
}