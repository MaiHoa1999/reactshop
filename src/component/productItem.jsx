import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addCart } from "../redux/action/CartAction";
export default function ProductItem(props){
  const {
    slug,
    thumbnail_url,
    name,
    price,
    real_price,
   
  } = props;
  let dispatch = useDispatch();

    return(
        <div className="col-6 col-md-4">
          {/* Card */}
          <div className="card mb-7">
            {/* Badge */}
            <div className="badge badge-white card-badge card-badge text-uppercase">
              
            </div>
            {/* Image */}
            <div className="card-img">
              {/* Image */}
              <Link to={`/product/${slug}`}>
                <img className="card-img-top card-img-front" src={thumbnail_url} alt="..." />
              </Link>
              {/* Actions */}
              <div className="card-actions">
                <span className="card-action">
                  <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                    <i className="fe fe-eye" />
                  </button>
                </span>
                <span className="card-action">
                  <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" onClick={() => dispatch(addCart({ ...props }))}>
                    <i className="fe fe-shopping-cart" />
                    
                  </button>
                </span>
                <span className="card-action">
                  <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                    <i className="fe fe-heart" />
                  </button>
                </span>
              </div>
            </div>
            {/* Body */}
            <div className="card-body px-0">
              {/* Category */}
              <div className="font-size-xs">
                <a className="text-muted" href="shop.html">Shoes</a>
              </div>
              {/* Title */}
              <div className="font-weight-bold">
                <a className="text-body" href="product.html">
                  {name}
                </a>
              </div>
              {/* Price */}
              <div className="font-weight-bold text-muted">
                {price}
              </div>
            </div>
          </div>
        </div>
    )
}