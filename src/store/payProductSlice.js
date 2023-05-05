import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-param-reassign */
const initialState = {
  yoga: false,
};

const payProductSlice = createSlice({
  name: "pay",
  initialState,
  reducers: {
    setPay(state) {
      state.yoga = true;
    },    
   
  },
});

export const { setPay } = payProductSlice.actions;

export default payProductSlice.reducer;
