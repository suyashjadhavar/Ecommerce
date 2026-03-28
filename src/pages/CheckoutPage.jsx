import { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useCartTotal from "../hooks/useCartTotal";
import CheckoutForm from "../components/CheckoutForm";

function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const { totalPrice, totalItems } = useCartTotal();
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleOrderSubmit(formData) {
    console.log("Order placed:", formData);
    clearCart();
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-icon">✅</div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with ECOM STORE. Your order is on its way!</p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Nothing to Checkout</h1>
        <p>Add some products first!</p>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-layout">
        <div className="checkout-form-section">
          <CheckoutForm onSubmit={handleOrderSubmit} />
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.title.slice(0, 30)}...</span>
              <span>
                {item.quantity} × ${item.price.toFixed(2)}
              </span>
            </div>
          ))}
          <hr />
          <div className="summary-total">
            <strong>Total ({totalItems} items)</strong>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
