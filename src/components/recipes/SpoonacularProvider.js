import React, {useState} from "react"


export const SpoonContext = React.createContext()

export const SpoonacularProvider = (props) =>{

    const [spoonRecipes, setSpoonRecipes] = useState([])
    const [singleSpoonRecipe, setSingleSpoonRecipe] = useState([])



    const searchSpoonRecipes = (search) =>{
        return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e3c96f96dbcd47d2b8ab620107f82854&query=${search}&limitLicense=false&number=15&instructionsRequired=true`)
            .then(res => res.json())
            .then(setSpoonRecipes)
    }

    const getSingleSpoonRecipe = (recipe_id) =>{
        return fetch(`/recipes/${recipe_id}/information?apiKey=e3c96f96dbcd47d2b8ab620107f82854`)
            .then(res => res.json())
            .then(setSingleSpoonRecipe)
    }

    return (
        <SpoonContext.Provider value={{
            searchSpoonRecipes,spoonRecipes, getSingleSpoonRecipe, singleSpoonRecipe
        }}>
            {props.children}
        </SpoonContext.Provider>
    )

}
