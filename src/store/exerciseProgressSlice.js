import { createSlice } from "@reduxjs/toolkit";

const exerciseProgressSlice = createSlice({
  name: "exerciseProgress",
  initialState: { exerciseOne: "", exerciseTwo: "", exerciseThree: "" },
  reducers: {
    exerciseOne: (state, action) => {
      state.exerciseOne = action.payload;
    },
    exerciseTwo: (state, action) => {
      state.exerciseTwo = action.payload;
    },
    exerciseThree: (state, action) => {
      state.exerciseThree = action.payload;
    },
  },
});

export const { exerciseOne, exerciseTwo, exerciseThree } =
  exerciseProgressSlice.actions;

export default exerciseProgressSlice.reducer;
