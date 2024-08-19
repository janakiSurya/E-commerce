import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProductToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeProductFromCart(state, action) {
      console.log(action.payload);
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id != action.payload.id
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
