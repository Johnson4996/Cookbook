import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { RecipeContext } from "./RecipeProvider"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FavoritesContext } from "../favorites/FavoritesProvider";


export const RecipeDetails = (props) => {

    const { recipe, getSingleRecipe, deleteRecipe } = useContext(RecipeContext)
    const { favorites, getUserFavorites, createFavorite, deleteFavorite } = useContext(FavoritesContext)

    const [buttonState, setButtonState] = useState(false)
    const [favId, setFavId] = useState()

    useEffect(() => {
        getSingleRecipe(props.match.params.recipe_id)
        getUserFavorites(props.match.params.recipe_id)
        .then(()=>{
            favorites.map(f => {
                if (f.recipe.id === parseInt(props.match.params.recipe_id)) {
                    setFavId(f.id)
                    setButtonState(true)
                } 
    
            })
        })
        

    }, [])

   




    const handleFavoriteClick = () => {
        const icon = buttonState
        setButtonState(!icon)
    }


    


    return (
        recipe.author.user.id === parseInt(localStorage.getItem('cbuser_id')) ?
            <>
                <div className="recipeInfoContainer">
                <p className="recipeDetailsCat">{recipe.category.label} Recipes</p>
                    <h2 className="recipeDetailsTitle">{recipe.title}</h2>
                    <p>By: <Link onClick={() => { props.history.push(`/user/${recipe.author.user.id}`) }}>{recipe.author.user.username}</Link> </p>
                    <p>{recipe.info}</p>
                    <img className="recipeDeatilsImg"  src={recipe.picture}></img>
                    <h3>Ingredients:</h3>
                    <p className="ingredients">{recipe.ingredients}</p>
                    <h3>Directions:</h3>
                    <p className="directions">{recipe.directions}</p>
                    <h3>Authors Notes:</h3>
                    <p>{recipe.notes}</p>
                </div>

                <div className="editDelIconContainer">
                    Edit or delete your post?
                    <div>
                    <EditIcon className="editIcon" onClick={() => { props.history.push(`/recipe/edit/${recipe.id}`) }} />
                    <DeleteIcon className="delIcon" onClick={() => { deleteRecipe(recipe.id).then(props.history.push("/")) }} />
                    </div>
                </div>
            </> :
            <>
                <div className="recipeInfoContainer">
                <p className="recipeDetailsCat">{recipe.category.label} Recipes</p>
                    <div className="recipeTitleContainer">
                        <h2 className="recipeDetailsTitle">{recipe.title}</h2>
                        <div className="favIconContainer">
                            {
                                buttonState ? <FavoriteIcon className="favIcon" onClick={() => deleteFavorite(favId).then(handleFavoriteClick())} /> :
                                    <FavoriteBorderIcon className="favIcon" onClick={() => createFavorite(recipe.id).then(handleFavoriteClick())} />
                            }
                        </div>
                    </div>
                    <p>By: <Link className="recipeDetailsAuthor" onClick={() => { props.history.push(`/user/${recipe.author.user.id}`) }}>{recipe.author.user.username}</Link> </p>
                    <p>{recipe.info}</p>
                    <img className="recipeDeatilsImg" src={recipe.picture}></img>
                    <h3>Ingredients:</h3>
                    <p className="ingredients">{recipe.ingredients}</p>
                    <h3>Directions:</h3>
                    <p className="directions">{recipe.directions}</p>
                    <h3>Authors Notes:</h3>
                    <p>{recipe.notes}</p>
                </div>





            </>
    )


}