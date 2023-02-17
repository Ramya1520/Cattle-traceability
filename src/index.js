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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path='/farmuser' element={<Farm_user_dashboard />}></Route>
        <Route path='' element={ <Product_details/>}></Route>
        <Route path='/slaughterhouse' element={<Slaughterhouse_dashboard/>}></Route>
        <Route path='/seller' element={<Seller_dashboard/>}></Route>
        <Route path='/logistics' element={<Logistics_dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();