import useCart from "../hooks/useCart";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-title">{item.title}</p>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
        <div className="quantity-controls">
          <button
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            −
          </button>
          <span className="qty-display">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-right">
        <p className="cart-item-subtotal">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          className="btn btn-danger"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
