import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./Reducers/rootReducer"

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

console.log("Store is created");

export default store;
