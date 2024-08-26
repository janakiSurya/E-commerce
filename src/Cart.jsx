// Cart.js
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import { removeProductFromCart } from "./Reducers/CartReducer";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeProductFromCart({ id: productId }));
  };

  return (
    <div className="cart-container">
      {Object.keys(cart).length > 0 ? (
        Object.keys(cart).map((productId) => {
          const { image, title, description, price, quantity } =
            cart[productId];
          return (
            <Card key={productId} className="cart-card mb-3">
              <Card.Img
                variant="top"
                src={image}
                className="cart-card-img-top"
              />
              <Card.Body className="cart-card-body">
                <Card.Title className="cart-card-title">{title}</Card.Title>
                <Card.Text className="cart-card-text">{description}</Card.Text>
                <Card.Text className="cart-card-price">
                  Price: ${price}
                </Card.Text>
                <Card.Text className="cart-card-quantity">
                  Quantity: {quantity}
                </Card.Text>
                <div className="cart-card-actions">
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(productId)}
                  >
                    Remove from Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <h3>Your cart is empty!</h3>
      )}
    </div>
  );
}

export default Cart;
