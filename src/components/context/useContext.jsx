import React, { createContext, useState } from 'react'

export const CartContext = createContext ([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const found = items.find (item => item.id === id);
        return found

    }

    const addItems = (item, qty) => {
        isInCart(item.id)
        ?
        setItems()
        :
        setItems([...items, { id: item.id, name: item.title, price: item.price , qty: qty }]);

    }

    return (
        <CartContext.Provider value={{ items, addItems }}>
            {children}
        </CartContext.Provider>
    )
}
