import { Link } from "react-router-dom";


export default function Pagination({ currentPage, totalPage }) {
  let start = currentPage - 6;
  if (start < 0) {
    start = 1;
  }
  let end = start + 12;
  if (end > totalPage) {
    end = totalPage;
  }
  function renderPage() {
    
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(
        <li className={`page-item ${currentPage === i ? "active" : ""} `}>
          <Link to={`/shop?page=${i}`} className="page-link">
            {i}
          </Link>
        </li>
      );
    }
    return arr;
  }

  return (
    <nav className="d-flex justify-content-center justify-content-md-end mt-10">
      <ul className="pagination pagination-sm text-gray-400">
        <li className="page-item">
          <Link
            to={`/shop?page=${currentPage - 1}`}
            className="page-link page-link-arrow"
          >
            <i className="fa fa-caret-left" />
          </Link>
        </li>
        {renderPage()}
        <li className="page-item">
          <Link
            to={`/shop?page=${currentPage + 1}`}
            className="page-link page-link-arrow"
          >
            <i className="fa fa-caret-right" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
