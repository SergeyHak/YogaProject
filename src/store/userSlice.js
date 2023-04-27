import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-param-reassign */
const initialState = {
  username: null,
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    remoueUser(state) {
      state.username = null;
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, remoueUser } = userSlice.actions;

export default userSlice.reducer;
