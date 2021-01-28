import React, { useContext, useRef, useState } from "react"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './searchbar.css'
import { RecipeContext } from "../recipes/RecipeProvider";
import { SpoonContext } from "../recipes/SpoonacularProvider"
import { Link } from "react-router-dom";
import Switch from '@material-ui/core/Switch'



export const SearchBar = (props) => {
    const { searchRecipes } = useContext(RecipeContext)
    const { searchSpoonRecipes } = useContext(SpoonContext)
    const [toggle, setToggle] = useState(true)
    const {searchResults} = useContext(RecipeContext)
    const {spoonRecipes} = useContext(SpoonContext)

    const userSearch = useRef()

    const handleToggle = (e) => {
        setToggle(!toggle)
        console.log(toggle)
    }
    console.log(spoonRecipes.results)
    return (
        <>

            <form className="container">
                <input ref={userSearch} name="userSearch" type="search" placeholder="Search by recipe or ingredients..." />
                <ArrowForwardIosIcon className="searchBtn" onClick={toggle ? () => { searchRecipes(userSearch.current.value) } : () => { searchSpoonRecipes(userSearch.current.value) }} />
            </form>
            <div className="searchSettingsContainer">
                <p>Search Cookbook</p>
                <Switch className="switch" onChange={handleToggle} />
                <p>Search Database</p>
            </div>
            <div className="searchResultsContainer">
                {toggle ?

                   
                        searchResults.map(r => {
                            return (

                                <div key={r.id} className="recipeCard">
                                    <img className="recipeCardImage" src={r.picture} alt="recipe_image" />
                                    <div className="recipeFeedInfoContainer">
                                        <Link className="recipeCardTitle" onClick={() => { props.history.push(`/recipe/${r.id}`) }}><h4>{r.title}</h4></Link>
                                    </div>
                                </div>

                            )
                        })
                
    : spoonRecipes.results.map(r => {
                            return (

                                <div key={r.results} className="recipeCard">
                                    <img className="recipeCardImage" src={r.image} alt="recipe_image" />
                                    <div className="recipeFeedInfoContainer">
                                        <Link className="recipeCardTitle" onClick={() => { props.history.push(`/recipe/${r.id}`) }}><h4>{r.title}</h4></Link>
                                    </div>
                                </div>

                            )
                        })
                        
                }
            </div>


        </>


    )
}