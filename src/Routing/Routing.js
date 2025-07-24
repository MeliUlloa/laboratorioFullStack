import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashPage from '../pages/DashPage.js/DashPage';
import ProductDetail from '../components/Products/ProductDetail/ProductDetail';
import Cart from '../components/Cart/Cart';
import { CartProvider } from '../Context/CartContext';
import ProductForm from '../components/ProductForm'


function Routing() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<DashPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/crear" element={<ProductForm />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default Routing;
