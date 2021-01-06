import React, { useContext, useRef } from "react"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './searchbar.css'
import { RecipeContext } from "../recipes/RecipeProvider";
import { Link } from "react-router-dom";



export const SearchBar = (props) =>{
    const {searchRecipes, searchResults} = useContext(RecipeContext)

    const userSearch = useRef()

    return (
    <>
    <form className="container">
	<input ref={userSearch} name="userSearch" type="search" placeholder="Search by recipe or ingredients..."/>
    <ArrowForwardIosIcon className="searchBtn" onClick={()=>{searchRecipes(userSearch.current.value)}} />
    </form>
    </>
    )
}