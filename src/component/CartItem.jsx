import { useDispatch } from "react-redux"
import { actionDecrease,actionRemove, actionAdd } from "../redux/action/CartAction"

export default function CartItem({ name, real_price, images, _id, cartNum }){
   let dispatch = useDispatch()
    const handleDecrease =() =>{
        
        dispatch(actionDecrease({_id,real_price}))
    }
    return(
        <li className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-4">
                    {/* Image */}
                    <a href="./product.html">
                      <img
                        className="img-fluid"
                        src={images?.[0]?.medium_url}
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-8">
                    {/* Title */}
                    <p className="font-size-sm font-weight-bold mb-6">
                      <a className="text-body" href="./product.html">
                       {name}
                      </a>{" "}
                      <br />
                      <span className="text-muted">{real_price} vnd</span>
                    </p>
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                      {/* Select */}
                      <button onClick={handleDecrease} >-</button>
                      <input value={cartNum} />
                        <button onClick={()=> dispatch(actionAdd({_id,real_price}))}>+</button>
                      <a
                        className="font-size-xs text-gray-400 ml-auto"
                        href="#!" onClick={() =>dispatch(actionRemove(_id))}
                      >
                        <i className="fe fe-x" /> Remove
                      </a>
                    </div>
                  </div>
                </div>
              </li>
    )
}