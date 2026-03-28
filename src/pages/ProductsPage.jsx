import { useState } from "react";
import useProducts from "../hooks/useProducts";
import usePagination from "../hooks/usePagination";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function ProductsPage() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { products, loading, error } = useProducts(category, searchTerm);

  const { currentItems, currentPage, totalPages, nextPage, prevPage } =
    usePagination(products, 8);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="products-page">
      <h1>All Products</h1>

      <div className="filters-bar">
        <CategoryFilter
          selectedCategory={category}
          onCategoryChange={(val) => {
            setCategory(val);
          }}
        />
        <SearchBar onSearch={setSearchTerm} />
      </div>

      <p className="result-count">{products.length} products found</p>

      {currentItems.length === 0 ? (
        <p className="no-results">No products match your search.</p>
      ) : (
        <div className="product-grid">
          {currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default ProductsPage;
