import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
//contains key value pair of actual reducers
export const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer
})