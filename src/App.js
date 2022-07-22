import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import SearchMobile from './components/SearchMobile';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import MenuList from './pages/MenuList';
import About from './pages/About';
import Contact from './pages/Contact';
import SingleFoodID from './pages/SingleFoodID';
import Cart from './pages/Cart';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Checkout from './components/Checkout';
import { Container } from '@mui/material';
import Payment from './pages/Payment';
import MyOrdersPage from './pages/MyOrdersPage';

function App() {
  return (
    <Container maxWidth='xl'>
      <BrowserRouter>
       <Header />   
       <SearchMobile /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<MenuList />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/:id' element={<SingleFoodID />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/orders' element={<MyOrdersPage />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/login' element={<LoginUser />} />
      </Routes>
      <Footer />
      </BrowserRouter> 
      <ToastContainer /> 
    </Container>
  );
}

export default App;
