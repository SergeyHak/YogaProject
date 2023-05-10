import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import coursesReducer from "./coursesSlice";
import exerciseProgressReducer from "./exerciseProgressSlice";
import { api } from "../api/api";
import workoutsReducer from "./workoutsSlice";
import payProductSlice from "./payProductSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    courses: coursesReducer,
    workouts: workoutsReducer,
    exerciseCount: exerciseProgressReducer,
    pay: payProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
