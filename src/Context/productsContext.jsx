import {useState,useEffect } from "react";
import { createContext } from "react";

import { getCategoriesAndDocuments } from "../utils/FireBase/firebase.utils";
export const productsContext = createContext({
    products:[],
})




export const ProductsProvider = ({ children}) => {
    const [products,setProducts]= useState([]);
    useEffect(()=>{
        const getCategories= async()=>{
            const fetchedProducts = getCategoriesAndDocuments()
             
        }
        getCategories();
   
    },[])
    const value = {
        products,
    }
    return <productsContext.Provider value={value}>{children}</productsContext.Provider>
}