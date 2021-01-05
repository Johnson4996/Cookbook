import React, { useState } from "react"


export const FavoritesContext = React.createContext()

export const FavoritesProvider =  (props) =>{
    const [favorites, setFavorites] = useState([])


    const getUserFavorites = (user_id) =>{
        return fetch(`http://localhost:8000/userfavorites/${user_id}`,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            }})
            .then(res => res.json())
            .then(setFavorites)
    }


    const createFavorite = (recipe_id) =>{
        return fetch(`http://localhost:8000/userfavorites`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            },
            body: JSON.stringify(recipe_id)
        })
        //may need to .then set state to active user?
    }

    return(
        <FavoritesContext.Provider value ={{
            favorites, getUserFavorites, createFavorite
        }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}
