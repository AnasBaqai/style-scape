import {useState } from "react";
import { createContext } from "react";
import SHOP_DATA from "../shop-data";
export const productsContext = createContext({
    products:[],
})


export const ProductsProvider = ({ children}) => {
    const [products]= useState([]);
 
    const value = {
        products,
    }
    return <productsContext.Provider value={value}>{children}</productsContext.Provider>
}