import { createContext } from "react";
import React, {useState} from 'react'

const UserContext = createContext("");
const UserProvider=(props)=>{
    const [name, setName] = useState("");
    const [childrenB, setChildrenB] = useState("")
    return (
        <UserContext.Provider value={{name,childrenB, setChildrenB}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}



