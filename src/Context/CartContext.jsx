import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart:()=>{ },
    removeItemCompletely:()=>{},
    totalItems: 0,
    totalPrice: 0
})

const addCartItem = (cartItems, productToAdd) => {
    /*
    1. find if cartitems containt product to add
    2. if found add the quantity
    3. return new array of cartItems 
    */

    const found = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    if (found) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
 


}
const removeCartItem = (cartItems, productToRemove) => {
  
    const found = cartItems.find((cartItem) => cartItem.id === productToRemove.id)
    if (found) {
        if(productToRemove.quantity===1){
            return cartItems.filter((cartItem)=>{
                return cartItem.id!== productToRemove.id
            })
        }
        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
    }

 


}

const removeItem = (cartItems,productToRemove)=>{
    return cartItems.filter((cartItem)=>{
        return cartItem.id!== productToRemove.id
    })
}

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, currCartItem) => total + currCartItem.quantity, 0)
        setTotalItems(newCartCount)
        const newCartTotal = cartItems.reduce((total, currCartItem) => total + (currCartItem.quantity*currCartItem.price), 0)
        setTotalPrice(newCartTotal)

    }, [cartItems])
    const addItemToCart =  (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        setCartItems(newCartItems)
    }
    const removeItemFromCart = (productToRemove) => {
        const newCartItems =removeCartItem(cartItems, productToRemove)
        setCartItems(newCartItems)
    }
    const removeItemCompletely = (productToRemove)=>{
        const newCartItems = removeItem(cartItems,productToRemove)
        setCartItems(newCartItems)
    }


    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        removeItemCompletely,
        totalItems,
        totalPrice
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}