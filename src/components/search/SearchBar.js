import React from "react"
import SearchIcon from '@material-ui/icons/Search';


export const SearchBar = (props) =>{
    return (
        <div className="searchContainer">
        <SearchIcon />
        <form classname="searchForm" action="">
            <input className="searchInput" type="search" />
            <i class="fa fa-search"></i>
        </form>
        </div>
    )
}