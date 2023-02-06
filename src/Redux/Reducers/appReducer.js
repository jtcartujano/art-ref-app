import {
    HANDLE_WINDOW_CHANGE,
  } from "../types";
  const initialState = {
    window: { width: 600, height: 600 },
  };
  export default (state = initialState, action) => {
    switch (action.type) {
      case HANDLE_WINDOW_CHANGE:
        return { ...state, window: action.payload.window };
      default:
        return state;
    }
};