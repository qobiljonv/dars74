import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userData: {
    displayName: "Qobiljon",
    email: "qobiljon@gmail.com",
    password: "2424",
    photoUrl:
      "https://images.unsplash.com/photo-1654627558671-6f154fc86487?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state, { payload }) => {
      state.user = null;
    },
  },
});

export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
