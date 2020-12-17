import React, { useState } from "react"


export const RecipeContext = React.createContext()

export const RecipeProvider =  (props) =>{
    const [recipes, setRecipes] = useState([])


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

    return(
        <RecipeContext.Provider value ={{
            recipes, getAllRecipes, createRecipe
        }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
