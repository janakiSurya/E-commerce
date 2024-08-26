import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../constants";

// Create the async thunk action to fetch product details
const getProductByIdAction = createAsyncThunk(
  "productDetails/getById",
  async (id) => {
    try {
      const response = await fetch(`${baseurl}products/${id}`);
      const product = await response.json();
      return product;
    } catch (error) {
      return "Api is failed";
    }
  }
);

export default getProductByIdAction;
