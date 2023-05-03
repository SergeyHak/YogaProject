import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import exerciseProgressReducer from "./exerciseProgressSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    exerciseProgress: exerciseProgressReducer,
  },
});
