import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { RecipeContext } from "../recipes/RecipeProvider"



export const SearchResults = (props) =>{

    const {searchResults} = useContext(RecipeContext)

    return(
        <div className="searchResultsContainer">
    {
                       searchResults.map(r =>{
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
    )
}