import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const { data: categories, loading } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  if (loading) return <Loading />;

  return (
    <div className="filter-group">
      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories &&
          categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
