import "./App.css";
import "./Home.css"; // Import the new CSS file
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import getAllProductAction from "./actions/GetProductAction";
import deleteProductAction from "./actions/DeleteProductAction";
import { addProductToCart } from "./Reducers/CartReducer";
import LoaderComponent from "./LoaderComponent";

function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (!products.length) dispatch(getAllProductAction());
  }, [dispatch, products.length]);

  const handleClick = (id) => {
    dispatch(deleteProductAction(id));
  };

  const handleCart = (product) => {
    dispatch(addProductToCart(product));
  };
  if (!products.length) return <LoaderComponent />;

  return (
    <div className="home-container">
      {products.map((product) => (
        <Card className="product-card" key={product.id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <div className="card-buttons">
              <Button onClick={() => handleClick(product.id)} variant="danger">
                Delete
              </Button>
              <Button onClick={() => handleCart(product)} variant="primary">
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Home;
