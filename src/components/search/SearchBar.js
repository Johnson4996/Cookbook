import React, { useContext, useRef, useState } from "react"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './searchbar.css'
import { RecipeContext } from "../recipes/RecipeProvider";
import {SpoonContext} from "../recipes/SpoonacularProvider"
import { Link } from "react-router-dom";
import Switch from '@material-ui/core/Switch'



export const SearchBar = (props) =>{
    const {searchRecipes} = useContext(RecipeContext)
    const {searchSpoonRecipes} = useContext(SpoonContext)
    const [toggle, setToggle] = useState(true)

    const userSearch = useRef()

    const handleToggle = (e) =>{
        setToggle(!toggle)
    }

    return (
    <>
    
    <form className="container">
	<input ref={userSearch} name="userSearch" type="search" placeholder="Search by recipe or ingredients..."/>
    <ArrowForwardIosIcon className="searchBtn" onClick={toggle?()=>{searchRecipes(userSearch.current.value)}:()=>{searchSpoonRecipes(userSearch.current.value)}}  />
    </form>
    <div className="searchSettingsContainer">
    <p>Search Cookbook</p>
    <Switch className="switch" onChange={handleToggle}/>
    <p>Search Database</p>
    </div>
    </>
    )
}