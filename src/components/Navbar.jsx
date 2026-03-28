import { Link, NavLink } from "react-router-dom";
import useCartTotal from "../hooks/useCartTotal";

function Navbar() {
  const { totalItems } = useCartTotal();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        🛒 ECOM STORE
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            Cart
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
