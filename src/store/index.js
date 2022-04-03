import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user-slice";
import cartReducer from "./reducers/cart-slice";
import uiReducer from "./reducers/ui-slice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
