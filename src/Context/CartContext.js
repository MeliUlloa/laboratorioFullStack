import React, { createContext, useEffect, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // cargar desde localstorage lo que ya tenemos 
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    // Función para agregar productos al carrito
     const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            let updatedCart;

            if (existingItem) {
                updatedCart = prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedCart = [...prevCart, { ...product, quantity: 1 }];
            }

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // eliminar iteam por id
     const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    // vaciar carrito
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };
    //obtener total productos
    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
