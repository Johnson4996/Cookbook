//data provider for favorites

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

    // takes the id of favorited recipe and sends to backend to save favorite
    const createFavorite = (recipe_id) =>{
        return fetch(`http://localhost:8000/userfavorites`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            },
            body: JSON.stringify(recipe_id)
        })
    }

    const deleteFavorite = (fav_id) =>{
        return fetch(`http://localhost:8000/userfavorites/${fav_id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            },
            body: JSON.stringify(fav_id)
        })
    }
    
    

    return(
        <FavoritesContext.Provider value ={{
            favorites, getUserFavorites, createFavorite, deleteFavorite
        }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}
