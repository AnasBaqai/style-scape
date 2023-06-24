import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
})

const addCartItem = (cartItems, productToAdd) => {
    /*
    1. find if cartitems containt product to add
    2. if found add the quantity
    3. return new array of cartItems 
    */

    const found = cartItems.find((cartItem)=>cartItem.id === productToAdd.id)
    if(found){
        return cartItems.map((cartItem)=>
          cartItem.id === productToAdd.id ?{...cartItem,quantity:cartItem.quantity+1}: cartItem
        )
    }
    return [...cartItems,{...productToAdd,quantity:1}]
    // let newArray = [];
    // let found = false;

    // for (let i = 0; i < cartItems.length; i++) {
    //     if (cartItems[i].id === productToAdd.id) {
    //         cartItems[i].quantity++;
    //         found = true;
    //     }
    //     newArray.push(cartItems[i]);
    // }

    // if (!found) {
    //     const item = {
    //         quantity: 1,
    //         ...productToAdd
    //     }
    //     newArray.push(item);
    // }

    // return newArray;



}


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)

        setCartItems(newCartItems)
        console.log(cartItems)
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}