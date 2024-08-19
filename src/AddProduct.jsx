import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AddProductAction from "./actions/AddProductAction";
import "./AddProduct.css"; // Import the new CSS file

function AddProduct() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !price || !category) {
      alert("All fields are required. Please fill in all fields.");
      return;
    }
    const formData = { title, description, price, category, image };
    dispatch(AddProductAction(formData));
  };

  return (
    <div className="add-product-container">
      <Form onSubmit={handleSubmit} className="add-product-form">
        <h2>Add a New Product</h2>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select
            aria-label="Select category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="1">Category One</option>
            <option value="2">Category Two</option>
            <option value="3">Category Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Add Product
        </Button>
      </Form>
    </div>
  );
}

export default AddProduct;
