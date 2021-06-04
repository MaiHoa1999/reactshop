import Address from "./component/address";
import AddressEdit from "./component/addressEdit";
import Order from "./component/order";
import OrderList from "./component/OrderList";
import Payment from "./component/payment";
import PaymentEdit from "./component/paymentEdit";
import PersonalInfo from "./component/PersonalInfo";
import SideBar from "./component/sidebar";
import WishList from "./component/wishlist";
import { Route, Switch, useRouteMatch } from 'react-router-dom'
export default function Account(){
  let match = useRouteMatch();
    return(
        <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h3 className="mb-10">My Account</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              {/* Nav */}
              <SideBar/>
            </div>
            <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <Switch>
                <Route exact path={`${match.path}/order/:_id`} component={Order}></Route>
                <Route exact path={`${match.path}/order`} component={OrderList}></Route>
                <Route exact path={`${match.path}/wishlist`} component={WishList}></Route>
                <Route exact path={`${match.path}/address`} component={Address}></Route>
                <Route exact path={`${match.path}/address/:action/:_id?`} component={AddressEdit}></Route>
                <Route exact path={`${match.path}/payment`} component={Payment}></Route>
                <Route exact path={`${match.path}/payment/:action/:_id?`} component={PaymentEdit}></Route>
                <Route exact path={`${match.path}/personalinfo`} component={PersonalInfo}></Route>
              
            
              </Switch>
            </div>
          </div>
        </div>
      </section>
    )
}