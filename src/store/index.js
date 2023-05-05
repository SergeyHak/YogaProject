import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import exerciseProgressReducer from "./exerciseProgressSlice";
import payProductSlice from "./payProductSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    exerciseProgress: exerciseProgressReducer,
    pay: payProductSlice,
  },
});
