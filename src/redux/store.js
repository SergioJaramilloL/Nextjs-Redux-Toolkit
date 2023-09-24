import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterSlice from "./slices/counterSlice";
import characterSlice from "./slices/characterSlice";

const makeStore = () => configureStore({
  reducer: {
    counter: counterSlice,
    characters: characterSlice
  }
})

export const wrapper = createWrapper(makeStore)