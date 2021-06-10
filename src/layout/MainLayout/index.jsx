import { Footer } from "./Footer"
import { Header } from "./Header"
import{ ModalProduct,ModalSearch, ModalShoppingCart,ModalWaitList,ModalSizeChart,ModalPasswordReset}from '../../component/index'
import { RouteWithSubRoutes } from "../../core/routerConfig"
import { Switch } from "react-router"


export const MainLayout=({children,routes}) =>{
    return(
        <>
            <Header/>
            <ModalSearch/>
            <ModalProduct/>
            <ModalShoppingCart/>
            <ModalSizeChart/>
            <ModalPasswordReset/>
            <ModalWaitList/>
            
           
            {/* {children} */}
            <Switch>
         
         {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>  

            <Footer/>
        </>
    )
}