import { useReducer } from "react";
import { createContext } from "react";
import { createAction } from "../utils/reducer/reducer.utils";


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    removeItemCompletely: () => { },
    totalItems: 0,
    totalPrice: 0
})

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    totalItems: 0,
    totalPrice: 0
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        case 'SET_IS_CART_OPEN':
            return{
                ...state,
                isCartOpen:payload
            }
        default:
            throw new Error(`unhandled type ${type} in cartReducer`);
    }
}

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
        if (productToRemove.quantity === 1) {
            return cartItems.filter((cartItem) => {
                return cartItem.id !== productToRemove.id
            })
        }
        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
    }




}

const removeItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => {
        return cartItem.id !== productToRemove.id
    })
}



export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const { isCartOpen, cartItems, totalItems, totalPrice } = state
    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, currCartItem) => total + currCartItem.quantity, 0)
        const newCartTotal = newCartItems.reduce((total, currCartItem) => total + (currCartItem.quantity * currCartItem.price), 0)
        const payload = {
            totalItems: newCartCount,
            cartItems: newCartItems,
            totalPrice: newCartTotal
        }
        dispatch(createAction('SET_CART_ITEMS', payload))

    }
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemReducer(newCartItems)
    }
    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove)
        updateCartItemReducer(newCartItems)
    }
    const removeItemCompletely = (productToRemove) => {
        const newCartItems = removeItem(cartItems, productToRemove)
        updateCartItemReducer(newCartItems)
    }
const setIsCartOpen =(bool)=>{
    console.log(bool)
    dispatch(createAction('SET_IS_CART_OPEN',bool))
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