import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import coursesReducer from "./coursesSlice";
import userDataReducer from "./userDatabaseSlice";
import { changeAccountDataApi } from "../services/changeAccountDataApi";
import workoutsReducer from "./workoutsSlice";

export const store = configureStore({
  reducer: {
    [changeAccountDataApi.reducerPath]: changeAccountDataApi.reducer,
    user: userReducer,
    courses: coursesReducer,
    workouts: workoutsReducer,
    userData: userDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(changeAccountDataApi.middleware),
});
