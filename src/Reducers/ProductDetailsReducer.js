import { createSlice } from "@reduxjs/toolkit";

const initialDetailsState = {
  productDetails: null,
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: initialDetailsState,
  reducers: {
    setProductDetails(state, action) {
      state.productDetails = action.payload;
    },
    clearProductDetails(state) {
      state.productDetails = null;
    },
  },
});

export const { setProductDetails, clearProductDetails } =
  productDetailsSlice.actions;

export default productDetailsSlice.reducer;
