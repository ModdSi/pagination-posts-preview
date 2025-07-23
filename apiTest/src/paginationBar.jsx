import "./App.css";

const PaginationBar = ({ currentPage, setCurrentPage, totalPosts }) => {
  const pagesNumber = totalPosts / 10;
  const pages = Array.from({ length: pagesNumber }, (_, i) => i + 1);
  return (
    <div className="pagination">
      <h3>Page: {currentPage}</h3>
      {pages.map((pageNum) => (
        <button
          id="pag-btn"
          key={pageNum}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
};

export default PaginationBar;
