import authReducer from "./authReducer";
import referenceReducer from "./referenceReducer";
import tagReducer from "./tagReducer";
// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    reference: referenceReducer,
    tag: tagReducer
});
export default rootReducer