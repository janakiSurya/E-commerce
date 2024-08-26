// CartReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cart: {}, // Object to store products with quantities
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProductToCart(state, action) {
      const product = action.payload;
      if (state.cart[product.id]) {
        state.cart[product.id].quantity += 1;
      } else {
        state.cart[product.id] = {
          ...product,
          quantity: 1,
        };
      }
    },
    removeProductFromCart(state, action) {
      const productId = action.payload.id;
      if (state.cart[productId]) {
        if (state.cart[productId].quantity > 1) {
          state.cart[productId].quantity -= 1;
        } else {
          delete state.cart[productId];
        }
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
