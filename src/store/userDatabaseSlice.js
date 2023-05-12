import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-param-reassign */
const initialState = {
  user_email: null,
  user_courses: {},
  user_workouts: {},
};
const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.user_email = action.payload.user_email;
      state.user_courses = action.payload.user_courses;
    },
    setUserWorkoutProgressData(state, action) {
      state.user_workouts = action.payload.user_workouts;
    },
  },
});

export const { setUserData, setUserWorkoutProgressData } =
  userDataSlice.actions;

export default userDataSlice.reducer;
