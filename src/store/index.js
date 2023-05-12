import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import coursesReducer from "./coursesSlice";
import userDataReducer from "./userDatabaseSlice";
import { api } from "../api/api";
import workoutsReducer from "./workoutsSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    courses: coursesReducer,
    workouts: workoutsReducer,
    userData: userDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
