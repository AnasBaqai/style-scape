import {useState } from "react";
import { createContext } from "react";
import productsData from "../shop-data.json"
export const productsContext = createContext({
    products:[],
})


export const ProductsProvider = ({ children}) => {
    const [products]= useState(productsData);
 
    const value = {
        products,
    }
    return <productsContext.Provider value={value}>{children}</productsContext.Provider>
}