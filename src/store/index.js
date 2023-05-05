import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import coursesReducer from "./coursesSlice";
import exerciseProgressReducer from "./exerciseProgressSlice";
import workoutsReducer from "./workoutsSlice";
import payProductSlice from "./payProductSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
    workouts: workoutsReducer,
    exerciseProgress: exerciseProgressReducer,
    pay: payProductSlice,
  },
});
