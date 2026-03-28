import { useMemo } from "react";
import useCart from "./useCart";

function useCartTotal() {
  const { cartItems } = useCart();

  const totalPrice = useMemo(
    () =>
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  return { totalPrice, totalItems };
}

export default useCartTotal;
