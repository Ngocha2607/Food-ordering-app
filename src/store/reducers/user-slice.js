import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.userToken;
      state.isLoggedIn = true;
      localStorage.setItem("token", state.token);
    },

    logout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
