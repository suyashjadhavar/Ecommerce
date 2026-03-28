import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useCart from "../hooks/useCart";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { data: product, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return null;

  return (
    <div className="detail-page">
      <button className="btn btn-outline" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-card">
        <div className="detail-image-wrapper">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="detail-info">
          <span className="product-category">{product.category}</span>
          <h1>{product.title}</h1>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-rating">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p className="detail-description">{product.description}</p>
          <button
            className="btn btn-primary btn-large"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
