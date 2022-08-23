import React, { useContext } from "react";
import { CartContext } from "./context/useContext"


const Cart = () => {    
    const { items, addItems} = useContext(CartContext);

    return (
    <div className="container">
        <h1>CARRITO</h1>
        {
            items.map ((item) => (
                <div key={item.id}>
                    <br />
                    <h2>{item.qty} * {item.name}</h2>
                    <h5>{item.price}</h5>
                </div>

            ))
        }

    </div>
  )
}

export default Cart