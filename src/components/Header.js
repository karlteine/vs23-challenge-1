import React, { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button'; 
import { CartContext } from '../store/CartContext';

const Header = () => {
    const { cartItems } = useContext(CartContext);
    
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Logo" />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                {/* Lisatud Button komponent textOnly propsiga */}
                <Button textOnly>Cart ({cartItems.length})</Button>
            </nav>
        </header>
    );
};

export default Header;
