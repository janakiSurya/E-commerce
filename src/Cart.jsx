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
          <Card key={product.id} className="cart-card mb-3">
            <Card.Img
              variant="top"
              src={product.image}
              className="cart-card-img-top"
            />
            <Card.Body className="cart-card-body">
              <Card.Title className="cart-card-title">
                {product.title}
              </Card.Title>
              <Card.Text className="cart-card-text">
                {product.description}
              </Card.Text>
              <Card.Text className="cart-card-price">
                Price: ${product.price}
              </Card.Text>
              <div className="cart-card-actions">
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromCart(product)}
                >
                  Remove from Cart
                </Button>
              </div>
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
