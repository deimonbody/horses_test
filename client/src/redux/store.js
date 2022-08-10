import { configureStore } from "@reduxjs/toolkit";
import { horseReducer } from "./horses";

export const store = configureStore({
  reducer: {
    horseReducer,
  },
});
