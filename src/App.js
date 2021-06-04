import {Provider} from 'react-redux'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import store from './redux'
import { PrivateRoute } from "./core/PrivateRoute";

import Home from './page/home';
import ProductDetail from './page/productDetail';
import Shop from './page/shop';
import Page404 from './page/page404';
import ShopCart from './page/shop-cart';
import StoreLocator from './page/store-locator';
import Auth from './auth'
import Faq from './page/faq'
import ModalSizeChart from './component/modalSizeChart';
import { ModalProduct, ModalSearch, ModalShoppingCart, ModalWaitList } from './component';
import ModalPasswordReset from './component/modalPasswordReset';
import Account from './page/account';
import TranslateProvider from './core/Translate.jsx'
import vi from './translate/vi.json'
import china from './translate/china.json'
let translate={
 vn: vi,
 china
}

function App() {
  return (
    <TranslateProvider translate={translate} >

  
    <Provider store={store}>
      <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
         <Route path="/product/:slug" component={ProductDetail}></Route>
         <Route exact path="/shop" component={Shop}></Route>
         <Route path="/shopcart" component={ShopCart}></Route>
         <Route path="/account" component={Account}></Route>
         <Route path="/auth" component={Auth}></Route>
         <Route path="/storelocator" component={StoreLocator}></Route>
         <Route path="/faq" component={Faq}></Route>
         <Route component={Page404}></Route>
        </Switch>
        <ModalSizeChart/>
        <ModalProduct/>
        <ModalSearch/>
        <ModalShoppingCart/>
        <ModalWaitList/>
        <ModalPasswordReset/>
        


        
      </MainLayout>
      </BrowserRouter>
    </Provider>
    </TranslateProvider>
 
  )
}

export default App;
