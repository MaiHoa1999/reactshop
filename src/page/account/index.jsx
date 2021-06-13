
import SideBar from "./component/Sidebar";
import {  Switch} from 'react-router-dom'
import { RouteWithSubRoutes } from "../../core/RouterConfig";
export default function Account({routes}){
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
               {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
            
              </Switch>
            </div>
          </div>
        </div>
      </section>
    )
}