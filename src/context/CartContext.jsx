import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function getInitialCart() {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, newQty) {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
