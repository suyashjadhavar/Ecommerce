import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useCartTotal from "../hooks/useCartTotal";
import CartItem from "../components/CartItem";

function CartPage() {
  const { cartItems, clearCart } = useCart();
  const { totalPrice, totalItems } = useCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty 🛒</h1>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <p className="cart-count">{totalItems} item(s) in cart</p>

      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span className="total-price">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="cart-summary-actions">
          <button className="btn btn-danger" onClick={clearCart}>
            Clear Cart
          </button>
          <Link to="/checkout" className="btn btn-primary">
            Proceed to Checkout →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
