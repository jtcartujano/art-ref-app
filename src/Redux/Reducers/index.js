import { combineReducers } from "redux";
import appReducer from "./appReducer";
import refReducer from "./refReducer";

export default combineReducers({
    appReducer: appReducer,
    refReducer: refReducer,
  });