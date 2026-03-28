function Pagination({ currentPage, totalPages, nextPage, prevPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        className="btn btn-outline"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="btn btn-outline"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;
