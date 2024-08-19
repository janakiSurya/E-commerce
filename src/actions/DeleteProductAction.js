import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeProduct } from "../Reducers/ProductReducer";
import { baseurl } from "../constants";

const deleteProductAction = createAsyncThunk(
  "products",
  async (id, { dispatch }) => {
    await fetch(baseurl + "products/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    dispatch(removeProduct(id));
  }
);
export default deleteProductAction;
