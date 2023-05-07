import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import exerciseProgressReducer from "./exerciseProgressSlice";
import  {api}  from "../api/api";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    exerciseProgress: exerciseProgressReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});

