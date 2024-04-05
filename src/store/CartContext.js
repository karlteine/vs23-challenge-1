import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);

    // Log cart data with quantities
    console.log('Cart Data:', updatedCartItems.reduce((cartData, cartItem) => {
  
      const existingItemIndex = cartData.findIndex(item => item.id === cartItem.id);
      if (existingItemIndex !== -1) {
     
        cartData[existingItemIndex].quantity++;
      } else {
       
        cartData.push({ ...cartItem, quantity: 1 });
      }
      return cartData;
    }, []));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
