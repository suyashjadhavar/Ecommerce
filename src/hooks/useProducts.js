import { useMemo } from "react";
import useFetch from "./useFetch";

function useProducts(category = "", searchTerm = "") {
  const { data: products, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const filtered = useMemo(() => {
    if (!products) return [];

    let result = products;

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    if (searchTerm.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [products, category, searchTerm]);

  return { products: filtered, loading, error };
}

export default useProducts;
