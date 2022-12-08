import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login';
import Wishlist from './component/wishlist';
import Clients from './component/Clients';
import Home from './component/Home';
import Products from './component/Products';
import Aboutus from './component/Aboutus';
import Sidenav from './component/Sidenav';
function App() {
  return (
<div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Sidenav />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Clients" element={<Clients />} />
    </Routes>
  </BrowserRouter>
  
</div> );
}
export default App;
