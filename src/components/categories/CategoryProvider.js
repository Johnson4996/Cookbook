// data provider for categories

import React, { useState } from "react"


export const CategoryContext = React.createContext()

export const CategoryProvider =  (props) =>{
    const [categories, setCategories] = useState([])


    const getAllCategories = () =>{
        return fetch(`http://localhost:8000/categories`,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            }})
            .then(res => res.json())
            .then(setCategories)
    }


    const createCategory = (category) =>{
        return fetch(`http://localhost:8000/categories`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            },
            body: JSON.stringify(category)
        })
            .then(getAllCategories)
    }

    return(
        <CategoryContext.Provider value ={{
            categories, getAllCategories, createCategory
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}
