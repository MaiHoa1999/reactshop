import {Provider} from 'react-redux'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import store from './redux'
import { RouteWithSubRoutes } from './core/routerConfig';
import TranslateProvider from './core/Translate.jsx'
import vi from './translate/vi.json'
import china from './translate/china.json'
import routes from './routes'

let translate={
 vn: vi,
 china
}



function App() {
  return (
    <TranslateProvider translate={translate} >
    <Provider store={store}>
      <BrowserRouter>
      
        <Switch>
         {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
     
      </BrowserRouter>
    </Provider>
    </TranslateProvider>
 
  )
}

export default App;

