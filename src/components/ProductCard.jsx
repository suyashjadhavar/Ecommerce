import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const shortTitle =
    product.title.length > 50
      ? product.title.slice(0, 50) + "..."
      : product.title;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{shortTitle}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-actions">
          <Link to={`/products/${product.id}`} className="btn btn-outline">
            View Details
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
