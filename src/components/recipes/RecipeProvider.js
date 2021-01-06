import React, { useState } from "react"


export const RecipeContext = React.createContext()

export const RecipeProvider =  (props) =>{
    const [recipes, setRecipes] = useState([])
    const [recipe, setRecipe] = useState({"author": {"user": {}},"category":{}})
    const [userRecipes, setUserRecipes] = useState([])
    const [searchResults, setSearchResults] = useState([])


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

    const deleteRecipe = (recipe_id) =>{
        return fetch(`http://localhost:8000/recipes/${recipe_id}`,{
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            }})
    }

    const updateRecipe = (recipe) =>{
        return fetch(`http://localhost:8000/recipes/${recipe.id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            },
            body: JSON.stringify(recipe)
        })
            .then(getAllRecipes)
    }

    const searchRecipes = (search) =>{
        return fetch(`http://localhost:8000/recipes?search=${search}`,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            }})
            .then(res => res.json())
            .then(setSearchResults)
    }

    

    return(
        <RecipeContext.Provider value ={{
            recipes, getAllRecipes, createRecipe, getSingleUserRecipes, userRecipes, getSingleRecipe, recipe,
            deleteRecipe, updateRecipe, searchRecipes, searchResults
        }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
