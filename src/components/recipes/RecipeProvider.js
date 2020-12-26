import React, { useState } from "react"


export const RecipeContext = React.createContext()

export const RecipeProvider =  (props) =>{
    const [recipes, setRecipes] = useState([])
    const [recipe, setRecipe] = useState({"author": {"user": {}},"category":{}})
    const [userRecipes, setUserRecipes] = useState([])


    const getAllRecipes = () =>{
        return fetch(`http://localhost:8000/recipes`,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            }})
            .then(res => res.json())
            .then(setRecipes)
    }


    const createRecipe = (recipe) =>{
        return fetch(`http://localhost:8000/recipes`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            },
            body: JSON.stringify(recipe)
        })
            .then(getAllRecipes)
    }

    const getSingleRecipe = (recipe_id) =>{
        return fetch(`http://localhost:8000/recipes/${recipe_id}` ,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            }})
            .then(res => res.json())
            .then(setRecipe)
    }

    const getSingleUserRecipes = (user_id) => {
        return fetch(`http://localhost:8000/recipes?user=${user_id}`,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            }})
            .then(res => res.json())
            .then(setUserRecipes)
    }

    

    return(
        <RecipeContext.Provider value ={{
            recipes, getAllRecipes, createRecipe, getSingleUserRecipes, userRecipes, getSingleRecipe, recipe
        }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
