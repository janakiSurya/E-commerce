import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import { removeProductFromCart } from "./Reducers/CartReducer";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeProductFromCart(product));
  };

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        cart.map((product) => (
          <Card key={product.id} style={{ width: "18rem" }} className="mb-3">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: ${product.price}</Card.Text>
              <Button
                variant="danger"
                onClick={() => handleRemoveFromCart(product)}
              >
                Remove from Cart
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h3>Your cart is empty!</h3>
      )}
    </div>
  );
}

export default Cart;
