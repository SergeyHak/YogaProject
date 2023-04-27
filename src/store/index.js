import { configureStore } from "@reduxjs/toolkit";
import userReduxer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReduxer,
  },
});
