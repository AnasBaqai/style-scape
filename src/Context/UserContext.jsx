import { useEffect, useState } from "react";
import { createContext } from "react";
import {onAuthStateChangedListener,createUserDocument} from "../utils/FireBase/firebase.utils"
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser : ()=>null,
})


export const UserProvider = ({ children}) => {
    const [currentUser,setCurrentUser]= useState(null);
    const value = {
        currentUser,
        setCurrentUser,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocument(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}