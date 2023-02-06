import {
    HANDLE_WINDOW_CHANGE,
  } from "../types";
  export const handleWindowChange = (window) => ({
    type: HANDLE_WINDOW_CHANGE,
    payload: window,
  });