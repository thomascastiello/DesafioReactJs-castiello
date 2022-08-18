import React from 'react';
import { ShoppingCartOutlined } from '@mui/icons-material';

function CartWidget() {
    return (
        <div className="cart-widget">
            <i className="bi bi-cart3"><ShoppingCartOutlined style={{color:"green"}}></ShoppingCartOutlined></i>
        </div>
        
    )
}
export default CartWidget