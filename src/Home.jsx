import "./App.css";
import "./Home.css"; // Import the new CSS file
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import getAllProductAction from "./actions/GetProductAction";
import deleteProductAction from "./actions/DeleteProductAction";
import { addProductToCart } from "./Reducers/CartReducer";
import LoaderComponent from "./LoaderComponent";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (!products.length) dispatch(getAllProductAction());
  }, [dispatch, products.length]);

  const handleClick = (id, e) => {
    e.stopPropagation();
    dispatch(deleteProductAction(id));
  };

  const handleCart = (product, e) => {
    e.stopPropagation();
    dispatch(addProductToCart(product));
  };

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (!products.length) return <LoaderComponent />;

  return (
    <div className="home-container">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card-wrapper"
          onClick={() => handleCardClick(product.id)}
        >
          <Card className="product-card">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <div className="product-price">${product.price}</div>
              <div className="card-buttons">
                <Button
                  onClick={(e) => handleClick(product.id, e)}
                  variant="danger"
                >
                  Delete
                </Button>
                <Button
                  onClick={(e) => handleCart(product, e)}
                  variant="primary"
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Home;
