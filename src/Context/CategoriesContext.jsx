import {useState,useEffect } from "react";
import { createContext } from "react";

import { getCategoriesAndDocuments } from "../utils/FireBase/firebase.utils";
export const categoriesContext = createContext({
    categoriesMap:{},
})




export const CategoriesProvider = ({ children}) => {
    const [categoriesMap,setCategoriesMap]= useState({});
    useEffect(()=>{
        const getCategories= async()=>{
            const fetchedCategories = await getCategoriesAndDocuments()
       
            setCategoriesMap(fetchedCategories)
          
            
             
        }
        getCategories();
   
    },[])
    const value = {
        categoriesMap,
    }
    return <categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
}