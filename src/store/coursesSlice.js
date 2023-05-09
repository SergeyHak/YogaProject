import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-param-reassign */
const initialState = {
  description: null,
  directions: [],
  fit: [],
  id: null,
  img: null,
  name: null,
  workouts: [],
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses(state, action) {
      state.description = action.payload.description;
      state.directions = action.payload.directions;
      state.fit = action.payload.fit;
      state.id = action.payload.id;
      state.img = action.payload.img;
      state.name = action.payload.name;
      state.workouts = action.payload.workouts;
    },
  },
});

export const { setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
