import "./Home.css";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import getAllProductAction from "./actions/GetProductAction";
import deleteProductAction from "./actions/DeleteProductAction";
import { addProductToCart } from "./Reducers/CartReducer";
import LoaderComponent from "./LoaderComponent";
import { useNavigate } from "react-router-dom";
import { baseurl } from "./constants"; // Ensure this path is correct

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const [loader, setLoader] = useState(true);

  // Fetch all products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${baseurl}products?limit=5`);
        const json = await response.json();
        console.log(json);
        dispatch(getAllProductAction(json)); // Update state with fetched products
        setLoader(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

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

  if (loader) return <LoaderComponent />;

  return (
    <div className="products-grid">
      {products.map((product) => (
        <Card
          key={product.id}
          className="product-card"
          onClick={() => handleCardClick(product.id)}
        >
          <div className="product-image">
            <Card.Img src={product.image} alt={product.title} />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <div className="product-price">${product.price}</div>
          </Card.Body>
          <div className="card-buttons">
            <Button
              onClick={(e) => handleClick(product.id, e)}
              variant="danger"
            >
              Delete
            </Button>
            <Button onClick={(e) => handleCart(product, e)} variant="primary">
              Add to Cart
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Home;
