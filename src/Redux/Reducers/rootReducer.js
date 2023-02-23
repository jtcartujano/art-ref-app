import authReducer from "./authReducer";
import referenceReducer from "./referenceReducer";
// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    reference: referenceReducer
});
export default rootReducer