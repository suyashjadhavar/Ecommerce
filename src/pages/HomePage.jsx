import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to ECOM STORE 🛒</h1>
        <p>Discover thousands of products at unbeatable prices.</p>
        <Link to="/products" className="btn btn-primary btn-large">
          Browse Products
        </Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <span className="feature-icon">🔍</span>
          <h3>Search & Filter</h3>
          <p>Find exactly what you need with category filters and live search.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🛍️</span>
          <h3>Easy Cart</h3>
          <p>Add, remove, and update items — your cart is saved automatically.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📦</span>
          <h3>Fast Checkout</h3>
          <p>Simple checkout with all the details you need, nothing more.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
