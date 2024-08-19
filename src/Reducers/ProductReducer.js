import { createSlice } from "@reduxjs/toolkit";

const intialProductState = {
  products: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState: intialProductState,
  reducers: {
    addProduct(state, action) {
      console.log("hello");
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    getAllProduct(state, action) {
      state.products = action.payload;
    },
  },
});
export const { addProduct, removeProduct, getAllProduct } =
  productSlice.actions;
export default productSlice.reducer;
