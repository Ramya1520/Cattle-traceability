import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import Farm_user_dashboard from './component/Farm_user_dashboard';
import Product_details from './component/Product_details';
import Slaughterhouse_dashboard from './component/Slaughterhouse';
import Seller_dashboard from './component/Seller';
import Logistics_dashboard from './component/Logistics';
import Manage from './component/Manage';
import New_form from './component/Create_new';
import Farmuser_manage from './component/Farmuser_data';
 import Login from './component/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
    <div className='index'>
      <Routes>
        <Route path='/farmuser' element={<Farm_user_dashboard />}></Route>
        <Route path='/product' element={ <Product_details/>}></Route>
        <Route path='/slaughterhouse' element={<Slaughterhouse_dashboard/>}></Route>
        <Route path='/seller' element={<Seller_dashboard/>}></Route>
        <Route path='/logistics' element={<Logistics_dashboard/>}></Route>
        <Route path='/manage' element={<Manage/>}></Route>
        <Route path='/create' element={<New_form/>}></Route>
        <Route path='/farmusermanage' element={<Farmuser_manage/>}></Route>
        <Route path='' element={<Login/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
