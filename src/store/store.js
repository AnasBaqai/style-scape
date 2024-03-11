import { compose,legacy_createStore,applyMiddleware } from "redux";
import {persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type){
    return next(action)
  }
  console.log("TYPE:",action.type)
  console.log("PAYLOAD",action.payload)
  console.log('current state', store.getState())
  next(action)
  console.log('next state', store.getState())
}

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV!=='production' &&loggerMiddleware].filter(Boolean)

const composeEnhancers = (process.env.NODE_ENV!== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares))

export const store = legacy_createStore(persistedReducer,undefined,composedEnhancers)

export const persistor = persistStore(store)