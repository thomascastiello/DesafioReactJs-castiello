import React, { useContext } from 'react';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { CartContext } from './context/useContext';

const CartWidget = () => {
    const {items} = useContext(CartContext)
    let itemsIncart = 0;

    items.map((item) => {
        itemsIncart = itemsIncart + item.qty;
    })


    return (
        <div>
            <div className="cart-widget itemsInCart">
            {itemsIncart}<i className="bi bi-cart3"><ShoppingCartOutlined style={{color:"green"}}></ShoppingCartOutlined></i>
            </div>
        </div>
        
    )
}
export default CartWidget