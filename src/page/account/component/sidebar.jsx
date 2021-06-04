import { NavLink ,useRouteMatch} from "react-router-dom";

export default function SideBar(){
    let match =useRouteMatch()
    return(
        <nav className="mb-10 mb-md-0">
                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                  <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${match.path}/order`}>
                    Orders
                  </NavLink>
                  <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${match.path}/wishlist`}>
                    Widhlist
                  </NavLink>
                  <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${match.path}/personalinfo`}>
                    Personal Info
                  </NavLink>
                  <NavLink className="list-group-item list-group-item-action dropright-toggle active" to={`${match.path}/address`}>
                    Addresses
                  </NavLink>
                  <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${match.path}/payment`}>
                    Payment Methods
                  </NavLink>
                  <NavLink className="list-group-item list-group-item-action dropright-toggle" to="#!">
                    Logout
                  </NavLink>
                </div>
              </nav>
    )
}