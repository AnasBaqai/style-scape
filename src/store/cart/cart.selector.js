const { createSelector } = require('reselect')


export const newCartCount =(state)=> state.CartItems.reduce((total, currCartItem) => total + currCartItem.quantity, 0)
export const newCartTotal = (state)=> state.CartItems.reduce((total, currCartItem) => total + (currCartItem.quantity * currCartItem.price), 0)