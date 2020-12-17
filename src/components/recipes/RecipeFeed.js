import React, {useContext, useEffect} from "react"
import { RecipeContext } from "./RecipeProvider"





export const RecipeFeed = (props) =>{


    const {getAllRecipes, recipes} = useContext(RecipeContext)

    useEffect(()=> {
        getAllRecipes()
        
    },[])


    return(
        <>

            <div className="recipeFeedContainer">
                
                    {
                       recipes.map(r =>{
                           console.log(r)
                          return(
                        <div className="recipeCard">
                            <p>{r.title}</p>
                            <p>By: {r.author.user.username}</p>
                        </div>
                          ) 
                       })
                    }
                

            </div>

        </>
    )
}