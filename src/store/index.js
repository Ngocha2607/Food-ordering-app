import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-slice";
import uiReducer from "./reducers/ui-slice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});
