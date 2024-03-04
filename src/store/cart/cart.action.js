import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  /*
  1. find if cartitems containt product to add
  2. if found add the quantity
  3. return new array of cartItems 
  */

  const found = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (found) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
  const found = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (found) {
    if (productToRemove.quantity === 1) {
      return cartItems.filter((cartItem) => {
        return cartItem.id !== productToRemove.id;
      });
    }
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const removeItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== productToRemove.id;
  });
};

export const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
  
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  setCartItems(newCartItems);
};
export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  setCartItems(newCartItems);
};
export const removeItemCompletely = (cartItems, productToRemove) => {
  const newCartItems = removeItem(cartItems, productToRemove);
  setCartItems(newCartItems);
};

export const setIsCartOpen = (isCartOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);
// export const setCartCount = (totalItems)=> createAction(CART_ACTION_TYPES.SET_CART_COUNT, totalItems)
// export const setCartTotal = (totalPrice)=> createAction(CART_ACTION_TYPES.SET_CART_TOTAL, totalPrice)
