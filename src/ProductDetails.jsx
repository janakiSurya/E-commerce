import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getProductByIdAction from "./actions/GetProductByIdAction";
import {
  setProductDetails,
  clearProductDetails,
} from "./Reducers/ProductDetailsReducer";
import LoaderComponent from "./LoaderComponent";
import { Card, Button } from "react-bootstrap";
import "./ProductDetails.css";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productDetails } = useSelector((state) => state.productDetails);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const product = await dispatch(getProductByIdAction(id)).unwrap();
        dispatch(setProductDetails(product));
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProductDetails();

    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, id]);

  if (!productDetails) return <LoaderComponent />;

  return (
    <div className="product-details-container">
      <Card className="card">
        <div className="card-img">
          <Card.Img
            variant="top"
            src={productDetails.image}
            alt={productDetails.title}
          />
        </div>
        <div className="card-body">
          <Card.Title>{productDetails.title}</Card.Title>
          <Card.Text>{productDetails.description}</Card.Text>
          <Card.Text className="card-price">
            <strong>Price:</strong> ${productDetails.price}
          </Card.Text>
          <div className="card-actions">
            <Button variant="primary">Add to Cart</Button>
            <Button variant="secondary">Buy Now</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductDetails;
