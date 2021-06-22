
import { MainLayout } from './layout/MainLayout'
import Home from './page/home';
import ProductDetail from './page/productDetail';
import Shop from './page/shop';
import Page404 from './page/page404';
import ShopCart from './page/shop-cart';
import StoreLocator from './page/store-locator';
import Auth from './page/auth'
import Faq from './page/faq'
import Account from './page/account';

import Blog from './page/blog';
import About from './page/about';
import BlogDetail from './page/blogDetail';
import Order from './page/account/component/Order';
import OrderList from './page/account/component/OrderList';
import WishList from './page/account/component/Wishlist';
import Address from './page/account/component/Address';
import AddressEdit from './page/account/component/AddressEdit';
import Payment from './page/account/component/Payment';
import PaymentEdit from './page/account/component/paymentEdit';
import PersonalInfo from './page/account/component/PersonalInfo';
import Comingsoon from './page/comingsoon';

let routes =[
    
    {
      component: Comingsoon,
      path:'/comingsoon'
    },
    {
      component: MainLayout,
      routes:[
        
        {
          path: '/product/:slug',
          component: ProductDetail
        },
        {
          path: '/shop',
          component: Shop
        },
        {
          path: '/shopcart',
          component: ShopCart
        },
        {
          path: '/storelocator',
          component: StoreLocator
        },
        {
          path: '/faq',
          component: Faq
        },
        {
          path: '/blog',
          component: Blog
        },
        {
          path: '/blog/:slug',
          component: BlogDetail
        },
        {
          path: '/about',
          component: About
        },
        {
          path: '/auth',
          component: Auth
        },
        {
          path: '/account',
          component: Account,
          auth: true,
          routes:[
            {
              path: '/account/order',
              component: Order,
              exact: true,
            },
            {
              path: '/account/order/:_id',
              component: OrderList
            },
            {
              path: '/account/wishlist',
              component: WishList
            },
            {
              path: '/account/address',
              component: Address
            },
            {
              path: '/account/address/:action/:_id?',
              component: AddressEdit
            },
            {
              path: '/account/payment',
              component: Payment
            },
            {
              path: '/account/payment/:action/:_id?',
              component: PaymentEdit
            },
            {
              path: '/account/personalinfo',
              component: PersonalInfo
            }
          ]
        },
        {
          path: '/',
          component: Home,
          exact: true
        },{
          component: Page404
        }
      ]
    }
   
  ]

  export default routes