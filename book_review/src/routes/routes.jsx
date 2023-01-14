import { Routes,Route } from 'react-router-dom';
import {SingIn} from '../pages/SingIn.jsx'
import {SingUp} from '../pages/SingUp.jsx'
import { Home } from '../pages/home.jsx'
import { Provider } from "react-redux"
import  store  from "../store/index.js"
import { CookiesProvider } from "react-cookie";

export function RoutesPage(){
  return(
    <div>  
      <Provider store={store}>     
      <CookiesProvider>
        <Routes>
          <Route  exact path='/' element={<SingIn />} />
          <Route path='/SingUp' element={<SingUp />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
        </CookiesProvider>
      </Provider>
      
    </div>
  );
}