import { compose,legacy_createStore,applyMiddleware } from "redux";
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

const middlewares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = legacy_createStore(rootReducer,undefined,composedEnhancers)