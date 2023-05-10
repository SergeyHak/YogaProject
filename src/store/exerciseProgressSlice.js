import { createSlice } from "@reduxjs/toolkit";

const exerciseProgressSlice = createSlice({
  name: "exerciseProgress",
  initialState: { exerciseCount: ["0", "0", "0", "0"] },
  reducers: {
    exerciseCount: (state, action) => {
      state.exerciseCount = action.payload;
    },
  },
});

export const { exerciseCount } = exerciseProgressSlice.actions;

export default exerciseProgressSlice.reducer;
