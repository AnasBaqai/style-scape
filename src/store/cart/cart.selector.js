const { createSelector } = require("reselect");

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectNewCartCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, currCartItem) => total + currCartItem.quantity, 0)
);
export const selectNewCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, currCartItem) =>
        total + currCartItem.quantity * currCartItem.price,
      0
    )
);