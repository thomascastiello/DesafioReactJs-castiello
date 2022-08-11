import React from "react";
import "./ItemDetail.css";

function ItemDetailCont(props) {

    return (
        <div className="container mb-5">
            <div className="text-center fs-1">DETALLES DEL PRODUCTO</div>
            <div className='card d-flex col-12 text-center'>
                <h2 className="mt-2 mb-2">{props.title}</h2>
                <img className='container imgcrvz  ' src={props.img} alt="Cerveza" />
                <p className='text-success text-uppercase fs-1'>$ {props.price}</p>
            </div>
        </div>
        )
}

export default ItemDetailCont