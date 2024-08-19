import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, removeProduct } from "../Reducers/ProductReducer";
import { baseurl } from "../constants";

const AddProductAction = createAsyncThunk(
  "products",
  async (formData, { dispatch }) => {
    console.log(formData);
    const res = await fetch(baseurl + "products", {
      method: "POST",
      body: JSON.stringify({
        title: formData.title,
        price: formData.price,
        description: formData.description,
        image: formData.image,
        category: formData.category,
      }),
    })
      .then((res) => res.json())
      .then((json) => json);
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    formData.id = timestamp;
    console.log(formData);
    dispatch(addProduct(formData));
    console.log(res);
  }
);
export default AddProductAction;
