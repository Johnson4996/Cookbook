import React, {useContext, useEffect} from "react"
import { Link } from "react-router-dom"
import { RecipeContext } from "./RecipeProvider"
import "./Recipes.css"






export const RecipeFeed = (props) =>{


    const {getAllRecipes, recipes} = useContext(RecipeContext)

    useEffect(()=> {
        getAllRecipes()
        
    },[])

    
    return(
        <>
            <div className="recipeFeedContainer">
                <h2>Your Feed</h2>
                    {
                       recipes.map(r =>{
                          return(
                    
                        <div key={r.id} className="recipeCard">
                            <img className="recipeCardImage" src={r.picture}/>
                            <div className="recipeFeedInfoContainer">
                                <Link className="recipeCardTitle" onClick={()=>{props.history.push(`/recipe/${r.id}`)}}><h4>{r.title}</h4></Link>
                                <Link className="recipeCardAuthor" onClick={()=>{props.history.push(`/user/${r.author.user.id}`)}}>{r.author.user.username}</Link>
                            </div>
                        </div>
                    
                          ) 
                       }).reverse()
                    }
            </div>

        </>
    )
}