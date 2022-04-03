import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false, loginIsShow: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    isShowLogin: (state) => {
      state.loginIsShow = !state.loginIsShow;
    },

  }
});

export const { toggle, isShowLogin } = uiSlice.actions;

export default uiSlice.reducer;
