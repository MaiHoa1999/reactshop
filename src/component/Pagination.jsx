import { Link } from "react-router-dom";

export default function Pagination({currentPage,totalPage}){
    return(
        <nav className="d-flex justify-content-center justify-content-md-end">
        <ul className="pagination pagination-sm text-gray-400">
         {
           currentPage>1 &&
           <li className="page-item">
            <Link className="page-link page-link-arrow" href="#">
              <i className="fa fa-caret-left" />
            </Link>
          </li>
         }
         
          <li className="page-item active">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">4</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">5</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">6</a>
          </li>
          {
            currentPage < totalPage && 
            <li className="page-item">
            <Link className="page-link page-link-arrow" href="#">
              <i className="fa fa-caret-right" />
            </Link>
          </li>
          }
        
        </ul>
      </nav>
    )
}