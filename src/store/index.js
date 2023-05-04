import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import coursesReducer from "./coursesSlice"
import exerciseProgressReducer from "./exerciseProgressSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
    exerciseProgress: exerciseProgressReducer,
  },
});
