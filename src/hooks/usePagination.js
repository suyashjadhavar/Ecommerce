import { useState, useMemo } from "react";

function usePagination(items = [], itemsPerPage = 8) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const safePage = Math.min(currentPage, totalPages || 1);

  const currentItems = useMemo(() => {
    const start = (safePage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, safePage, itemsPerPage]);

  function goToPage(n) {
    setCurrentPage(Math.max(1, Math.min(n, totalPages)));
  }

  function nextPage() {
    goToPage(safePage + 1);
  }

  function prevPage() {
    goToPage(safePage - 1);
  }

  return {
    currentItems,
    currentPage: safePage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
  };
}

export default usePagination;
