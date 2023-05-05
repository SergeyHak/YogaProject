import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-param-reassign */
const initialState = {
  workouts: {},
};
const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    setWorkouts(state, action) {
      state.workouts = action.payload;
    },
  },
});

export const { setWorkouts } = workoutsSlice.actions;

export default workoutsSlice.reducer;
