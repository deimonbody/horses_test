import { createSlice } from "@reduxjs/toolkit";
import horseReducer from "./reducer";
const initialState = {
  horses: [],
};

const { reducer } = createSlice({
  name: "horse",
  initialState,
  reducers: {},
  extraReducers: horseReducer,
});

export { reducer };
