import React, { useContext, useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { RecipeContext } from "./RecipeProvider"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { FavoritesContext } from "../favorites/FavoritesProvider";


export const RecipeDetails = (props) => {

    const {recipe, getSingleRecipe, deleteRecipe} = useContext(RecipeContext)
    const{favorites, getUserFavorites, createFavorite, deleteFavorite } = useContext(FavoritesContext)

    const [buttonState, setButtonState] = useState(false)
    const [favId, setFavId] = useState()

   useEffect(()=>{
       getSingleRecipe(props.match.params.recipe_id)
       getUserFavorites(props.match.params.recipe_id)
       favorites.map(f =>{
        if(f.recipe.id == props.match.params.recipe_id){
            setButtonState(true)
            setFavId(f.id)
        }else{
            setButtonState(false)
        }
          
    })
       
   }, [])
    
  
   

   const handleFavoriteClick = () => {
    const icon  = buttonState
    setButtonState( !icon )   
}

  
   console.log(favId)
   
   
    return(
        recipe.author.user.id === parseInt(localStorage.getItem('cbuser_id')) ? 
        <>
        <div className="recipeInfoContainer">
            <p>{recipe.category.label}</p>
            <h2>{recipe.title}</h2>
        <p>By: <Link onClick={()=>{props.history.push(`/user/${recipe.author.user.id}`)}}>{recipe.author.user.username}</Link> </p>
        <p>{recipe.info}</p>
        <img src={recipe.picture}></img>
        <h3>Ingredients:</h3>
        <p className="ingredients">{recipe.ingredients}</p>
        <h3>Directions:</h3>
        <p className="directions">{recipe.directions}</p>
        <h3>Authors Notes:</h3>
        <p>{recipe.notes}</p>
        </div>

        <div>
            <EditIcon onClick ={()=>{props.history.push(`/recipe/edit/${recipe.id}`)}} />
            <DeleteIcon onClick= {()=>{deleteRecipe(recipe.id).then(props.history.push("/"))}} />
        </div>
        </> :  
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
        <div>
            {
            buttonState? <StarIcon onClick={()=>deleteFavorite(favId).then(handleFavoriteClick())}/>:
            <StarBorderIcon onClick={()=>createFavorite(recipe.id).then(handleFavoriteClick())}/> 
            }   
        </div>
        
           
        

        </>
    )
   
    
}