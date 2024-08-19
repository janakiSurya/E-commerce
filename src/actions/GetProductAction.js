import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../constants";
import { getAllProduct } from "../Reducers/ProductReducer";

const getAllProductAction = createAsyncThunk(
  "products",
  async (__, { dispatch }) => {
    console.log("hello");
    await fetch(baseurl + "products")
      .then(async (res) => {
        return await res.json();
      })
      .then((json) => {
        console.log(json);

        dispatch(getAllProduct(json));
      })
      .catch(() => {});
  }
);
export default getAllProductAction;
