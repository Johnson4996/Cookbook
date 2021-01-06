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
                            <Link onClick={()=>{props.history.push(`/recipe/${r.id}`)}}><p>{r.title}</p></Link>
                            <p>By: <Link onClick={()=>{props.history.push(`/user/${r.author.user.id}`)}}>{r.author.user.username}</Link></p>
                            <img src={r.picture}/>
                        </div>
                    
                          ) 
                       })
                    }
    </div> 
    )
}