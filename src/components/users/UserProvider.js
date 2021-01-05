import React, {useState,createContext} from "react"


export const UserContext = React.createContext()

export const UserProvider = (props) =>{
    const [cbUser, setCbUser] = useState({"user": {}})

    

    const getSingleCbUser = (cbUser_id) =>{
        return fetch(`http://localhost:8000/user/${cbUser_id}`,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("cbuser")}`
            }})
            .then(res => res.json())
            .then(setCbUser)
    }

    return(
        <UserContext.Provider value ={{
            cbUser, getSingleCbUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
